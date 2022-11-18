import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { editUser, updateUser } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
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

  let { id } = useParams();

  const { user } = useSelector((state) => state.data);

  const [error, setError] = useState("");
  const { email, username, password, image, first_name, last_name, phone_number, bio, birthdate } = state;

  
  useEffect(() => {
    dispatch(editUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!email || !username || !password || !image || !first_name || !last_name || !phone_number || !bio || !birthdate) {
      setError("INPUTS are empty !");
    } else {
      dispatch(updateUser(state , id));
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
        EDIT BLOGG
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
          variant="outlined"
          value={state.email}
          name="name"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={state.username}
          type="text"
          name="username"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={state.password}
          type="password"
          name="password"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={state.image}
          type="text"
          name="image"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="First name"
          variant="outlined"
          value={state.first_name}
          name="first_name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          value={state.last_name}
          type="text"
          name="last_name"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={state.phone_number}
          type="number"
          name="phone_number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          value={state.bio}
          type="text"
          name="bio"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Birthdate"
          variant="outlined"
          value={state.birthdate}
          type="date"
          name="birthdate"
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" color="success" type="submit">
          Update
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;
