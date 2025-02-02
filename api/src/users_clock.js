const {
  merge
} = require('ramda')
const pLimit = require('p-limit')
const OSMesa = require('./services/osmesa')
const db = require('./db/connection')
const dbSettings = require('./models/settings')
const { cache } = require('./config')
const { updateUserCountryEdit, isState } = require('./models/userCountryEdits')

async function updateCountries (userID, countryEditList) {
  const countryEditTotal = {}
  const countryChangesetTotal = {}

  // get total edits for a given user
  countryEditList.forEach((tuple) => {
    let countryName = tuple.name
    if (isState(countryName)) {
      countryName = 'United States of America'
    }
    if (!countryEditTotal[countryName]) {
      countryEditTotal[countryName] = 0
      countryChangesetTotal[countryName] = 0
    }
    countryEditTotal[countryName] += tuple.edit_count
    countryChangesetTotal[countryName] += tuple.changeset_count
  })

  // edit countries for each user
  const promises = Object.keys(
    countryEditTotal
  ).map((country) => updateUserCountryEdit(
    userID,
    country,
    countryEditTotal[country],
    countryChangesetTotal[country]
  ))
  return Promise.all(promises)
}

/*
 * Worker runs in a clock process and updates the cache
 * that holds users
 *
 * @returns {Promise} a response
 */
async function usersWorker () {
  try {
    const users = await db('users').select('id', 'osm_id') // Get all users

    // run only 100 concurrent events
    const limit = pLimit(100)
    const promises = users.map((obj) => limit(async () => {
      // Get edit count from OSMesa
      try {
        const data = await OSMesa.getUser(obj.osm_id)
        obj.edit_count = data.edit_count || 0
        obj.last_edit = data.last_edit
        await updateCountries(obj.id, data.country_list)
      } catch (e) {
        if (e.statusCode !== 404) {
          // Only log if there was a server error
          console.error(`${obj.osm_id} not retrieved from OSMesa`, e.message)
        }
      }
      return db('users')
        .where('osm_id', obj.osm_id)
        .then(() => db('users').where('osm_id', obj.osm_id).update(
          merge(obj, {
            updated_at: db.fn.now()
          })
        ))
    }))

    // Return a single promise wrapping all the
    // SQL statements
    return Promise.all(promises)
  } catch (e) {
    console.error(e)
    return Promise.resolve()
  }
}

// Run
if (require.main === module) {
  dbSettings.list().then(settings =>
    // load the cache
    settings.forEach(({ setting, value }) => {
      cache.put(setting, value)
    })
  )
    .then(() => usersWorker())
    .then(async resp => {
      console.log(`Updated ${resp.length} records.`)
      await db('user_update').where('id', '=', 1)
        .update({ last_update: new Date() })
      await db.destroy()
      process.exit(0)
    })
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = usersWorker
