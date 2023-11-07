import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    interests: [],
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...formData[name], value]
            : formData[name].filter((item) => item !== value)
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="form-container">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter your Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Enter your Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <div className="radio-checkbox-container">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleInputChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div>
          <label htmlFor="interests">Interests:</label>
          <div className="radio-checkbox-container">
            <input
              type="checkbox"
              id="music"
              name="interests"
              value="music"
              checked={formData.interests.includes("music")}
              onChange={handleInputChange}
            />
            <label htmlFor="music">Music</label>
            <input
              type="checkbox"
              id="sports"
              name="interests"
              value="sports"
              checked={formData.interests.includes("sports")}
              onChange={handleInputChange}
            />
            <label htmlFor="sports">Sports</label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
