import React from 'react'
import Link from '../Link'
import DataNotAvailable from '../DataNotAvailable'
import InlineList from '../InlineList'
import findCountryByName from '../../lib/utils/findCountryByName'

function formatCountryList (userCountries) {
  if (!userCountries) return
  return userCountries.map((country) => {
    return findCountryByName(country.name)
  }).filter((country) => !!country)
}

function DashboardSidebar (props) {
  const { teams, osmesaData, loggedIn } = props
  const countries = osmesaData ? formatCountryList(osmesaData.country_list) : []
  return (
    <div className='sidebar-right widget-25'>
      <h2 className='header--large' style={{ marginBottom: 5 }}>
        <Link href='/teams'>
          <a className='header-link'>Teams</a>
        </Link>
      </h2>
      {
        teams && teams.length
          ? (
            <InlineList
              viewMore='/teams'
              list={teams.map((item) => {
                return {
                  name: item.name,
                  href: `/teams/${item.id}`
                }
              })}
            />
          )
          : (
            loggedIn
              ? <DataNotAvailable message={'You haven\'t joined any teams yet'} callToAction='Explore teams' callToActionUrl='/teams' />
              : <DataNotAvailable message={`${osmesaData.name} hasn't joined any teams yet`} />
          )
      }

      <h2 className='header--large' style={{ marginBottom: 5 }}>
        <Link href='/countries'>
          <a className='header-link'>Countries</a>
        </Link>
      </h2>
      {
        countries.length
          ? (
            <InlineList
              viewMore='/countries'
              list={countries.map((item) => {
                return {
                  name: item.name,
                  href: `/countries/${item.code}`
                }
              })}
            />
          )
          : (
            loggedIn
              ? <DataNotAvailable message='We have not found any stats for your profile' callToAction='Explore countries' callToActionUrl='/countries' />
              : <DataNotAvailable message={`${osmesaData.name} has not yet mapped in any country`} />
          )
      }
    </div>
  )
}

export default DashboardSidebar
