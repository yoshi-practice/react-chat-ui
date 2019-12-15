import * as React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tweet from './Tweet';

function App() {
  return (
    <div>
      <Tweet
        icon="🌽"
        displayName="もろこし太郎"
        accountName="morokoshi"
        content="今日も1日もろこしがうまい"
      />
      <Tweet
        icon="🦐"
        displayName="エビデンス"
        accountName="evidence"
        content="かにみそたべたい"
      />
    </div>
  );
}

export default App;
