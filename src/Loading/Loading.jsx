import React from "react";
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Uploading...</h3>
      </div>
    </div>
  );
}

export default Loading;
