import React, { Component } from 'react';
// import SignupForm from './SignupForm';
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import { signupUser } from "../../js/actions/index";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gpa: '',
      ethnicity: '',
      educationLevel: '',
      grade: '',
      password: ''
    };
  };

  // validateForm() {
  //   return this.state.firstName.length > 0 &&  this.state.lastName.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  // };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signupUser(this.state);
  };

  render() {

    if (this.props.user) {
      return <Redirect to='/dashboard' />
    };
    return (
      <div>
        <div className="signup-page">

          <section className="signup-section signup-info-section blue-green-gradient">
            <form className="signup-form" onSubmit={this.handleSubmit}>

              <div className="signup-fields">
                <h2 className="legend">Create Account</h2>

                <label htmlFor="firstname">First Name</label>
                <input name="firstname" id="firstname" type="text" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange} required />

                <label htmlFor="lastname">Last Name</label>
                <input name="lastname" id="lastname" type="text" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} required />

                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />

                <label htmlFor="gpa">GPA</label>
                <input name="gpa" id="gpa" type="number" placeholder="GPA" value={this.state.gpa} onChange={this.handleChange} required />

                <label htmlFor="ethnicity">Ethnicity</label>
                <input name="ethnicity" id="ethnicity" type="text" placeholder="Ethnicity" value={this.state.ethnicity} onChange={this.handleChange} required />
                
                <label htmlFor="educationLevel">Education Level</label>
                <input name="educationLevel" id="educationLevel" type="text" placeholder="Education Level" value={this.state.educationLevel} onChange={this.handleChange} required />
                
                <label htmlFor="grade">Grade</label>
                <input name="grade" id="grade" type="text" placeholder="Grade" value={this.state.grade} onChange={this.handleChange} required />

                <label htmlFor="password">Password</label>
                <input name="password" id="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />

                <button className="btn signup-submit" type="submit">Signup</button>
                <p> Already have an account? <Link to="/login">Login here</Link></p>
              </div>
            </form>
{/* 
            <div className="signup-info-section blue-green-gradient">
              <h1>Sign up to join ScholarBoard for free!</h1>
            </div> */}


          </section>
        </div>
      </div >
    );
  };
};

const mapStateToProps = state => {
  return { user: state.user };
};

function mapDispatchToProps() {
  return {
    signupUser
  };
};
const SignupUser = connect(mapStateToProps, mapDispatchToProps())(Signup);

export default SignupUser;
