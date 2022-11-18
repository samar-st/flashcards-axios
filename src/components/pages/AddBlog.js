import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    image: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    bio: "",
    birthdate: ""
  });

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [error, setError] = useState("");
  const { email, username, password, image, first_name, last_name, phone_number, bio, birthdate } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!email || !username || !password || !image || !first_name || !last_name || !phone_number || !bio || !birthdate) {
      setError("INPUTS are empty !");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Back
      </Button>
      <br />
      <span>
        ADD BLOGG
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </span>
      <Box
        onSubmit={handleSubmitClick}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="standard"
          value={state.email}
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="standard"
          value={state.username}
          type="text"
          name="username"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="standard"
          value={state.password}
          type="password"
          name="password"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="standard"
          value={state.image}
          type="text"
          name="image"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="First name"
          variant="standard"
          value={state.first_name}
          name="first_name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Last name"
          variant="standard"
          value={state.last_name}
          type="text"
          name="last_name"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Phone number"
          variant="standard"
          value={state.phone_number}
          type="number"
          name="phone_number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="standard"
          value={state.bio}
          type="text"
          name="bio"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          // label="BirthDate"
          variant="standard"
          value={state.birthdate}
          type="date"
          name="birthdate"
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddBlog;
