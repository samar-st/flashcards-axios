import React, { useEffect } from "react";
import { makeStyles, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import './style.css'

const BlogList = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // get DATASS
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  // delete function
  const handleDelete = (id) => {
    console.log("id", id);
    if (window.confirm("Really you wand to delete it?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      {users && users.map((user) =>
        <div className="box">
        <h4>{user.name}</h4> <br />
        <p>{user.description}</p> <br />
        <i>{user.rank}</i> <br />
        <strong>{user.price}</strong> <br />
        <span>{user.last_modified}</span> <br />
        <i>{user.url}</i>
       </div>
      )}
    </div>
  );
};

export default BlogList;
