import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';


/**
 * setState(object nextState[, function callback])
 * nextState，将要设置的新状态，该状态会和当前的state合并
 * callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。 
 * 
 * replaceState(object nextState[, function callback])
 * nextState，将要设置的新状态，该状态会替换当前的state。
 * callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。
 * 
 * findDOMNode 获取DOM节点
 * 
 * setProps(object nextProps[, function callback])设置属性
 * 
 * replaceProps(object nextProps[, function callback])替换属性
 */
class ComponentApi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number:0
        }
        this.changeNumber = this.changeNumber.bind(this);
    }
    changeNumber(){
        // 不能在组件内部通过this.state修改状态，因为该状态会在调用setState()后被替换。
        this.setState(function(state){
            return {number:state.number+1}
        });
    }
    
    render(){
        return (
            <div>
                <Button onClick={this.changeNumber}>点击次数:{this.state.number}</Button>
            </div>
        )
    }
}
export default ComponentApi