import React, { useState } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const SignupForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { signup } = useAuth();

  // SignUp functionality
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password doesn't match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        required
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        required
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox required text="I agree to the Terms &amp; Conditions" />

      <Button disabled={loading}>
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}
      <div class="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
