import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useFormInput from "./hooks";
import { getProfile } from "./services";
import "./styles.css";

function App() {
  const [profile, setProfile] = useState({
    number: 987422,
    email: "j@y.com",
    name: "JJ"
  });
  useEffect(async () => {
    const profileData = await getProfile();
    setProfile(profileData);
  }, []);

  const number = useFormInput(profile && profile.number);
  const email = useFormInput(profile && profile.email);
  const fullName = useFormInput(profile && profile.name);

  const submitForm = () => {
    // call update api with filed data
  };

  return (
    <div style={{ width: "700px", margin: "auto" }}>
      <div style={{ margin: "1.6rem" }} className="App">
        <h2 className="title">Personal Details</h2>
        <div className="inputContainer">
          <label htmlFor="fullname">Name</label>
          <input {...fullName} name="fullname" />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input {...email} name="email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="number">Mobile</label>
          <input {...number} name="number" />
        </div>
        <button className="button" onClick={submitForm} onSubmit={submitForm}>
          Update Profile
        </button>
      </div>
      <pre style={{ padding: "1.6rem" }}>
        {JSON.stringify({ fullName, email, number }, " ", 2)}
      </pre>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
