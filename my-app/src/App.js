import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>你好!</h1>
        <h2>现在是 {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
 
function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('time')
  );
} 
setInterval(tick, 1000);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="time"></div>
      </header>
    </div>
  );
}
export default App;
