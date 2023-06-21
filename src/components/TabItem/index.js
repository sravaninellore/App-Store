// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, changeTabItem} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-item' : ''

  const onClickTabItem = () => {
    changeTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-name ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
