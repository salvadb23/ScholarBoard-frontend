import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SignupForm from './SignupForm';


const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="signup-page">
        <SignupForm />
      </div>
      <Footer />
    </div>
  )
}

export default Signup;