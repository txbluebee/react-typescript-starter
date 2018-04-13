import React, { Component } from "react";
import ReactDOM from "react-dom";

import hatImage from './public/images/hat.jpg'

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <div className="page_image_watch"></div>
      <img src={hatImage} alt=""/>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
