import React from 'react';
import PropTypes from 'prop-types';

class Props extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    // 生命周期钩子
    componentDidMount() {
        
    }
    componentWillUnmount() {
        
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>进入页面时间 {this.state.date.toLocaleTimeString()}</h2>
                <h3>{this.props.name}</h3>
            </div>
        )
    }

}
/**
 * 通过组件类的 defaultProps 属性为 props 设置默认值，如下：
 */
Props.defaultProps = {
    title: '标题',
    requiredFunc:()=>{return '111'},
    requiredAny:[1,2,3]
};
/**
 * 使用 propTypes 验证 Props 参数
 */
const Message = ()=>{
    return 'message'
}
Props.propTypes = {
    title: PropTypes.string,
    // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,

    // 可以被渲染的对象 numbers, strings, elements 或 array
    optionalNode: PropTypes.node,

    //  React 元素
    optionalElement: PropTypes.element,

    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
    optionalMessage: PropTypes.instanceOf(Message),

    // 用 enum 来限制 prop 只接受指定的值。
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // 可以是多个对象类型中的一个
    optionalUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message)
    ]),

    // 指定类型组成的数组
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // 指定类型的属性构成的对象
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // 特定 shape 参数的对象
    optionalObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),

    // 任意类型加上 `isRequired` 来使 prop 不可空。
    requiredFunc: PropTypes.func.isRequired,

    // 不可空的任意类型
    requiredAny: PropTypes.any.isRequired,

};

export default Props

  