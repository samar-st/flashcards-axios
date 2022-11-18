import axios from "axios";
import React,{useState, useEffect} from "react";

const baseURL = "http://192.168.192.19:8000/tutorials/";

export default function Login() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.price}</p>
    </div>
  );
}