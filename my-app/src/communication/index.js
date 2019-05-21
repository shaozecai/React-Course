/**
 * 组件通信 Component Communication
 * 1、父组件向子组件通信
 * 2、子组件向父组件通信
 * 3、跨级组件通信
 */

import React from 'react'

/**1父组件向子组件通信
 * 父组件
 */
class Communication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'父组件标题'
        }
    }

    render(){
        return (
        <div>
            <Title title={this.state.title}></Title>
        </div>
        )
    }
}

/**
 * 子组件
 */
class Title extends React.Component{
    constructor(porps){
        super(porps);
        this.state={subTitle:'子组件标题'}
    }
    render(){
        return(
            <div className="title">{this.props.title+'--'+this.state.subTitle}</div>
        )
    }
    
}

/**2、子组件向父组件通信
 * 子组件
 */
class Content extends React.Component{
    render(){
        return (
            <div>
                <input type="text" value={this.props.content} onChange={this.props.onChangeFun}></input>
            </div>
        )
    }
}
/**
 * 父组件
 */
class ContentParent extends React.Component{
    constructor(props){
        super(props);
        this.state={content:'父组件定义的初始内容'};
        this.onChangeFun = this.onChangeFun.bind(this);
        
    }

    onChangeFun(event){
        this.setState({
            content:event.target.value
        })
    }
    render(){
        return (
            <div>
                <Content content={this.state.content} onChangeFun={this.onChangeFun}></Content>
                <div>子组件发生变化后传给父组件同步修改：<br></br>{this.state.content}</div>
            </div>
        )
    }
}



export default ContentParent