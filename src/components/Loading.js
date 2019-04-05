import React from 'react';

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-light m-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}