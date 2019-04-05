import React, { useState } from 'react';

const searchStyle = {
  backgroundColor: '#000',
  border: '1px solid #222',
  color: '#FFF'
}

export const LocationSearch = () => {
  const handleOnClick = () => {
    const zip = document.getElementById('zip');
    window.location.href = `/zip/${zip.value}/today`;
  }
  
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-search-location"></i></span>
      </div>
      <input type="text" className="form-control" style={searchStyle} id="zip" maxLength="5" placeholder="Enter your zip code..." />
      <div className="invalid-feedback">
        Please enter a valid location.
      </div>
      <button className="btn btn-secondary" onClick={handleOnClick}>Search</button>
    </div>
  )
}