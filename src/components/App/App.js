import * as React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Tweet from '../Tweet/Tweet';
// import Tweet from '../Tweet/Tweet';

function App() {
    return(
      <div>
        <Tweet name="yoshi" content="Hello!"/>
        <Tweet name="manji" content="sample data"/>
      </div>
  );
}

export default App;
