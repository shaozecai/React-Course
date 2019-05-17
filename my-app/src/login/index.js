import React from 'react';
import './index.scss';
import logo from './img/logo.png';

import 'bootstrap/dist/css/bootstrap.css';

import {Button,Container,Modal} from 'react-bootstrap';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {code:'admin',password:'password123',show: false};
        // 这边绑定是必要的，这样 `this` 才能在函数中使用
        this.loginFun = this.loginFun.bind(this);
        this.setCode = this.setCode.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    loginFun(event){
        this.setState({show:true});
        event.preventDefault();
    }
    setCode(event){
        this.setState({code:event.target.value})
    }
    setPassword(event){
        this.setState({password:event.target.value})
    }
    handleClose(){
        this.setState({show:false});
    }
    render(){
        return (
            <Container>
                <div className="login_box">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <h2>VIP用户登录</h2>
                    <div className="form">
                        <label>账号:</label>
                        <input name="code" type="text" value={this.state.code} onChange={this.setCode}></input>
                        <label>密码:</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.setPassword}></input>
                        <Button  onClick={this.loginFun}>登录</Button>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>提示信息</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {JSON.stringify(this.state)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            关闭
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            确定
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
    
}

export default Login