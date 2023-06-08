import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import AuthUser from "../services/AuthUser";

class Register extends React.Component {
  state = {
    validated: false,
    datePicker: {
      maxDate: new Date()
    },
    modal: {
      show: false
    },
    email: "",
    name: "",
    surname: "",
    gender: "M",
    password: "",
    confirmPassword: ""
  };

  handleChange = event => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    this.setState({
      validated: true
    });

    this.handleModalOpen();
  };

  handleCityChange = event => {
    const value = event.currentTarget.value;
    const valueToUpper = value.toUpperCase();
    let province = "";
    switch (valueToUpper) {
      case "MILANO":
        province = "MI";
        break;
      case "ROMA":
        province = "RO";
        break;
      case "TORINO":
        province = "TO";
        break;
      case "FIRENZE":
        province = "FI";
        break;
      case "GENOVA":
        province = "GE";
        break;
      default:
        province = "";
        break;
    }

    this.setState({
      birthProvince: province,
      birthCity: value
    });
  };

  handleModalClose = () => {
    this.setState({
      modal: {
        show: false
      }
    });
  };

  handleModalOpen = () => {
    this.setState({
      modal: {
        show: true
      }
    });
  };

  handleModalConfirm = () => {
    //AuthUser.addUser(this.state.name, this.state.password);
    //this.handleModalClose();
    this.props.history.push("/");
  };

  render() {

    return (
      <div className="container">
        <div className="row-fluid">
          <h1>Registration Form</h1>
          <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="valid">
                Valid name
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                The field is required
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <option value="M">Man</option>
                <option value="F">Woman</option>
              </Form.Control>
              <Form.Control.Feedback type="valid">
                Valid Gender
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                The field is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <Form.Control.Feedback type="valid">
                Valid email
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Is not a valid email
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
                required
              />
              <Form.Control.Feedback type="valid">
                Valid Password
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                The field is required
              </Form.Control.Feedback>
            </Form.Group>
            .
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                required
                isInvalid={
                  this.state.password !== this.state.confirmPassword
                    ? true
                    : false
                }
              />
              <Form.Control.Feedback type="valid">
                Valid Password
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                The password must match!
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>

        <Modal show={this.state.modal.show} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detail Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>
                <label>User Name: </label> {this.state.name}
              </li>
              
              <li>
                <label>Gender: </label> {this.state.gender}
              </li>
              <li>
                <label>Email: </label> {this.state.email}
              </li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalClose}>
              Close
            </Button>
            <Button variant="success" onClick={this.handleModalConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Register;
