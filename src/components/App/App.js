import * as React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Tweet from '../Tweet/Tweet';
// import Tweet from '../Tweet/Tweet';

function App() {
  // return (
  //   <div>
  //     <Tweet
  //       icon="🌽"
  //       displayName="もろこし太郎"
  //       accountName="morokoshi"
  //       content="今日も1日もろこしがうまい"
  //     />
  //     <Tweet
  //       icon="🦐"
  //       displayName="エビデンス"
  //       accountName="evidence"
  //       content="かにみそたべたい"
  //     />
  //   </div>
    return(
      <div>
        <Tweet name="yoshi" content="Hello!"/>
        <Tweet name="manji" content="sample data"/>
      </div>
  );
}

export default App;
