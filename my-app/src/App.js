import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

// 组件1
class Clock extends React.Component {
  /**
   * 状态机（State Machines）
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  /**
   * componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。
    在组件输出到 DOM 后会执行 componentDidMount() 钩子，我们就可以在这个钩子上设置一个定时器。
    this.timerID 为定时器的 ID，我们可以在 componentWillUnmount() 钩子中卸载定时器。
   */
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  /**
   * 当 <Clock /> 被传递给 ReactDOM.render() 时，React 调用 Clock 组件的构造函数。 由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来初始化 this.state 。 我们稍后会更新此状态。

React 然后调用 Clock 组件的 render() 方法。这是 React 了解屏幕上应该显示什么内容，然后 React 更新 DOM 以匹配 Clock 的渲染输出。

当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子。 在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 tick()。

浏览器每秒钟调用 tick() 方法。 在其中，Clock 组件通过使用包含当前时间的对象调用 setState() 来调度UI更新。 通过调用 setState() ，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕上应当显示什么。 这一次，render() 方法中的 this.state.date 将不同，所以渲染输出将包含更新的时间，并相应地更新 DOM。

一旦 Clock 组件被从 DOM 中移除，React 会调用 componentWillUnmount() 这个钩子函数，定时器也就会被清除。
   */

  render() {
    return (
      <div>
        <h1>你好!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}</h2>
        {/* <Comp2 date={this.state.date.toLocaleTimeString()} /> */}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="time">
          {/* 组件调用 同一个组件可以多次调用*/}
          <Clock />
          <Clock />
        </div>
      </header>
    </div>
  );
}
export default App;
