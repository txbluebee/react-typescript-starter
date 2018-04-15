import React, { Component } from 'react';
import style from "./../public/styles/main.scss";
import hatImage from './../public/images/hat.jpg'

export default class App extends Component {
  render() {
    return (
      <div>
        <p>React here!</p>
        <div className="page_image_watch"></div>
        <img src={hatImage} alt="" />
      </div>
    );
  }
}
