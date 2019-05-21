/**
 * React 组件生命周期方法】
 * 1、componentWillMount  在渲染前调用,在客户端也在服务端。
 * 2、componentDidMount 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
 * 3、componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
 * 4、shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 可以在你确认不需要更新组件时使用。
 * 5、componentWillUpdate 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
 * 6、componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
 * 7、componentWillUnmount 在组件从 DOM 中移除之前立刻被调用。
 * 
 */

 import React from 'react'

 class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date()
        }
    }
    componentWillMount(){
        //渲染前调用
        console.log(1);
    }
    componentDidMount(){
        let that = this;
        //初始化 第一次渲染后调用
        this.timeInterver = setInterval(function(){
            that.setState({time:new Date()})
        },1000)
    }
    componentWillUnmount(){
        //卸载前调用
        clearInterval(this.timeInterver);
    }
    componentWillUpdate(){
        //props state 发生改变 渲染前调用
        console.log('willUpdate')
    }
    componentDidUpdate(){
        //props state 发生改变 渲染后调用
        console.log('didUpdate')
    }
    render(){
        return (
            <div>
                <div className="time">{this.state.time.toLocaleTimeString()}</div>
            </div>
        )
    }
 }


 export default LifeCycle