import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const InputErrors = {};

    if (!formData.name) {
      InputErrors.name = 'Enter your Name';
    }

    const emailonline = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailonline.test(formData.email)) {
      InputErrors.email = 'Please enter your email';
    }

    const phoneonline = /^[0-9]{10}$/;
    if (!formData.phone || !phoneonline.test(formData.phone)) {
      InputErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.gender) {
      InputErrors.gender = "Please select your gender";
    }

    if (!formData.password || formData.password.length < 6) {
      InputErrors.password = "Password must be at least 6 characters above";
    }

    if (Object.keys(InputErrors).length > 0) {
      setErrors(InputErrors);
    } else {
      console.log("Form successfully", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",

      });
      setErrors({});
    }
  };

  return (
    <div className="headform">
      <h2>Fill This Form</h2>
      <form onSubmit={handleSubmit} className="formfull">
        <div className="off">
          <label htmlFor="name">Name</label>
          <input
            type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleInputChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="off">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="off">
          <label htmlFor="phone">Phone Number</label>
          <input type="text"
            name="phone"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label className="gender">Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleInputChange}
            checked={formData.gender === 'Male'}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleInputChange}
            checked={formData.gender === 'Female'}
          />
          Female
           {errors.gender && <span className="error"> {errors.gender}</span>}
        </div>

        <div className="off">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
