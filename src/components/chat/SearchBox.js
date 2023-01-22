
import React from 'react'

export const SearchBox = (props) => {
  const handleSearchInput = (e) => {
    props.setSearchInput(e.target.value);
  }
  return (
    <div className="left-side mt-1">
    <div className="uk">
      <div className="chat-list-search way way1  mb-2">
        <div className="tk mb-2">
          <input type="text" className="form-control bg-light"
            placeholder="🔍   Search or Start New Chat"onChange={handleSearchInput} />
        </div>
      </div>
    </div>
  </div>
  )
}
