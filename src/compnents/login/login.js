import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './login.css';




export default class Login extends Component {
    state = {
        credentials: {
            userName: '',
            userPassword: ''
        },
        password: false
    }
    changeInputs = (e) => {
        let creds = this.state.credentials
        creds[e.target.name] = e.target.value
        this.setState({
            credentials: creds
        })
    }
    Login = () => {
        let nameState = this.state.credentials.userName;
        let passwordState = this.state.credentials.userPassword
        let userName = "hruday@gmail.com";
        let password = "hruday123";
        if (nameState === userName && passwordState === password) {
            window.location.href = "/employees"
        } else {
            this.setState({
                password: true
            })
        }
        console.log(this.state.credentials);
        setTimeout(() => {
            this.setState({
                password: false
            })
        }, 2000);
    }
    render() {
        const { userName, userPassword } = this.state
        return (
            <div >

                <Container>
                    <Row className="row">
                        <div className="login">
                            <div className="login-head">Login</div>
                            <Col sm={4}>
                                <form autoComplete="off">
                                    <div className="input">
                                        <TextField variant="outlined" label="User Name" name="userName" value={userName} onChange={this.changeInputs} />
                                    </div>
                                    <div className="input">
                                        <TextField variant="outlined" label="Password" t="Password" name="userPassword" value={userPassword}
                                            onChange={this.changeInputs} />
                                    </div>
                                    <div className="input">
                                        <Button onClick={this.Login} variant="contained" color="secondary">
                                            Login
                                        </Button>
                                    </div>


                                </form>
                                {this.state.password &&
                                    <div className="errorMessage">
                                        Enter Valid Credentials
                                    </div>
                                }
                            </Col>
                        </div>

                    </Row>
                </Container>
            </div>
        );
    }
}