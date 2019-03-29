import React from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* 
        Map over the tabs provided in your props and create a new Tab component for each one.
        Give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props 
        */}
        {props.tabs.map(tab => (
          <Tab
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
            key={tab}
          />
        ))}
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types.
Tabs.propTypes = {
  tabs: PropTypes.array,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string
}

export default Tabs
