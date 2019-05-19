import React from 'react';
import logo from '../login/img/logo.png';

import 'bootstrap/dist/css/bootstrap.css';

import {Button,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';

class Bootstrap extends React.Component{
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
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        )
    }
    
}

export default Bootstrap

