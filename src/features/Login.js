import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
  onChangeHandle(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <label>Username</label>
          <Form.Control
            type="text"
            placeholder="User name"
            name="userName"
            onChange={this.onChangeHandle}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.onChangeHandle}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() =>
            this.props.loginHandle(this.state.userName, this.state.password)
          }
        >
          login
        </Button>
      </Form>
    );
  }
}
