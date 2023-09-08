import React, { Component } from "react";
import "./API.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: "",
    };

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }
  login(e) {
    e.preventDefault();
    debugger;
    fetch("https://localhost:44356/Api/login/Login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: this.state.Email,
        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.Status == "Success") alert("Login Successful");
        else alert("Invalid user");
      });
  }

  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <div className="row" style={{ width:1000 }}>
          <div className="col md-4">
            <div className="card mt-5" style={{ border: "none" }}>
              <form className="card-body" onSubmit={this.login}>
                LOGIN
                <div className="form-group mb-3">
                  <label className="mb-2">
                    <strong style={{ color: "blue", marginLeft: 300 }}>
                      Email
                    </strong>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    onChange={this.Email}
                    style={{ color: "blue", width: 300 }}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="mb-2">
                    <strong style={{ color: "blue", marginLeft: 300 }}>
                      Password
                    </strong>
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    onChange={this.Password}
                    style={{ color: "blue", width: 300 }}
                  />
                </div>

                <div className="d-grid mt-3">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary"
                    style={{ color: "white", width: 300, marginLeft: 300 }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col col-md-4">
            <Reg></Reg>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

class Reg extends Component {
  constructor() {
    super();

    this.state = {
      EmployeeName: "",
      City: "",
      Email: "",
      Password: "",
      Department: "",
    };

    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.EmployeeName = this.EmployeeName.bind(this);
    this.Password = this.Password.bind(this);
    this.Department = this.Department.bind(this);
    this.City = this.City.bind(this);
    this.register = this.register.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value });
  }

  Department(event) {
    this.setState({ Department: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }
  City(event) {
    this.setState({ City: event.target.value });
  }
  EmployeeName(event) {
    this.setState({ EmployeeName: event.target.value });
  }

  register(event) {
    event.preventDefault();
    fetch("https://localhost:44356/Api/login/InsertEmployee", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmployeeName: this.state.EmployeeName,
        Password: this.state.Password,
        Email: this.state.Email,
        City: this.state.City,
        Department: this.state.Department,
      }),
    })
      .then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status == "Success") alert("Registration Successful");
        else alert("Sorrrrrry !!!! Un-authenticated User !!!!!");
      });
  }

  render() {
    return (
      <div>
        <div className="card mt-5" style={{ border: "none" }}>
          <form className="card-body" onSubmit={this.register}>
            REGISTRATION
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong style={{ color: "blue", marginLeft: 300 }}>
                  EmpName
                </strong>
              </label>
              <input
                required
                type="text"
                name="name"
                onChange={this.EmployeeName}
                style={{ color: "blue", width: 300 }}
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong style={{ color: "blue", marginLeft: 300 }}>
                  Email
                </strong>
              </label>
              <input
                required
                type="email"
                name="email"
                onChange={this.Email}
                style={{ color: "blue", width: 300 }}
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong style={{ color: "blue", marginLeft: 300 }}>
                  Password
                </strong>
              </label>
              <input
                required
                type="password"
                name="password"
                onChange={this.Password}
                style={{ color: "blue", width: 300 }}
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong style={{ color: "blue", marginLeft: 300 }}>City</strong>
              </label>
              <input
                required
                type="text"
                name="city"
                onChange={this.City}
                style={{ color: "blue", width: 300 }}
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong style={{ color: "blue", marginLeft: 300 }}>
                  Department
                </strong>
              </label>
              <input
                required
                type="text"
                name="department"
                onChange={this.Department}
                style={{ color: "blue", width: 300 }}
              />
            </div>

            <div className="d-grid mt-3">
              <button
                type="submit"
                className="btn btn-block btn-primary"
                style={{ color: "white", width: 300, marginLeft: 300 }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
