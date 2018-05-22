import * as React from 'react';

import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Home name="Max" age={27}/>
        <p className="display-3 text-primary">React here now!</p>
      </div>
    );
  }
}
