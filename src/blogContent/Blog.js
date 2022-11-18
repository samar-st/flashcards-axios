import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css';

const client = axios.create({
	baseURL: 'http://localhost:5000/blog',
});

const Blog = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [posts, setPosts] = useState([]);

	// GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await client.get('?_limit=5');
				setPosts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);

	// DELETE with Axios
	const deletePost = async (id) => {
		try {
			await client.delete(`${id}`);
			setPosts(
				posts.filter((post) => {
					return post.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	// handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if(!title || !content) { 
			alert("error")
		} else{
			addPosts(title, content);
		}
		
	};

	// POST with Axios
	const addPosts = async (title, content) => {
		try {
			let response = await client.post('', {
				title: title,
				content: content,
			});
			setPosts([response.data, ...posts]);
			setTitle('');
			setContent('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="app">
			<nav>
				<h1>POSTS APP</h1>
			</nav>
			{/* <div className="add-post-container">
				<form onSubmit={handleSubmit}>
					
					<TextField 
					id="outlined-basic"
					label="Post Title"
					value={title}
					variant="outlined" onChange={(e) => setTitle(e.target.value)} />
                      <br />
					<TextField
					id="filled-multiline-static"
					label="Content"
					multiline
					rows={5}
					variant="outlined"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					/>	 
					<br />
					
					<button type="submit">Add Post</button>
				</form>
			</div> */}
			<div className="posts-container">
				<h2>All Posts 📫</h2>
				{posts.map((post) => {
					return (
						<div className="common_content">
							<div className="post-card" key={post.id}>
							<h2 className="post-title">{post.title}</h2>
							<p className="post-body">{post.content}</p>
							Task1: <span>{post.question}</span> <br />
							Answer: <span>{post.answer}</span>
							<div className="button">
							{/* <Button variant="contained" color="error"
							 onClick={() => deletePost(post.id)}>
								Delete
							</Button> */}
							</div>
						</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
