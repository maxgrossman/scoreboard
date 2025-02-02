import React, { Component } from 'react'
import DataNotAvailable from '../DataNotAvailable'
import FilterBar from '../FilterBar'
import BadgeInProgress from '../BadgeInProgress'
import generatePDF from '../../lib/utils/generatePDF'

class DashboardBadges extends Component {
  constructor (props) {
    super(props)
    this.state = {
      badgesFilter: 'unearnedBadges'
    }

    this.onBadgesFilterClick = this.onBadgesFilterClick.bind(this)
  }

  onBadgesFilterClick (badgesFilter) {
    this.setState({ badgesFilter })
  }

  render () {
    const { badges, name } = this.props
    const { badgesFilter } = this.state

    const badgeFilters = [
      { name: 'In progress', id: 'unearnedBadges' },
      { name: 'Earned', id: 'earnedBadges' },
      { name: 'All', id: 'all' }
    ]

    if (!badges || !badges.all || !badges.all.length) {
      return (
        <div>
          <h2 className='header--large header--with-description'>Badges</h2>
          <DataNotAvailable message={'No badges available'} />
        </div>
      )
    }
    const filteredBadges = badges[badgesFilter]
    const badgeKeys = Object.keys(filteredBadges)
    const { earnedBadges } = badges

    return (
      <div>
        <h2 className='header--large header--with-description'>Badges</h2>
        <div className='page-actions'>
          <FilterBar
            filters={badgeFilters}
            active={this.state.badgesFilter}
            onClick={this.onBadgesFilterClick}
          />
          <button className='button button--secondary' onClick={() => generatePDF(name, earnedBadges)}>Download Earned Badges</button>
        </div>
        <ul className='widget-container Badge-Roll'>
          {
            badgeKeys.map((badgeKey, i) => {
              const badge = badges[badgesFilter][badgeKey]

              return (
                <li className='widget widget-50 Badge-Container' key={`upcoming-badge-${i}`}>
                  <BadgeInProgress badge={badge} badgeClass='progress' />
                  <div className='badge-Details'>
                    <h3 className='header--small sub-head header--with-description'>{badge.name}</h3>
                    <p>
                      {badgesFilter === 'unearnedBadges' ? badge.progress : badge.description}
                    </p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default DashboardBadges
