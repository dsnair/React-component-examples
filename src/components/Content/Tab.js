import React from 'react'
import PropTypes from 'prop-types'

const Tab = props => {
  return (
    <div
      /* 
      Using your props, determine if the `tab` prop matches the `selectedTab` prop: 
      if they match, the className should be: 'tab active-tab', 
      if it doesn't, it should just be 'tab'
      */
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
      /* 
      Replace this dummy click handler function with your selectTabHandler function from props. 
      You'll need to pass the `tab` in as an argument to this handler. 
      */
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string
}

export default Tab
