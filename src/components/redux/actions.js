import axios from "axios";  
import * as types from "./actionType";

// get users data's
const getUsers = (users) => ({ 
    type: types.GET_USERS,
    payload: users,
});

// delete user from back
const userDeleted = () => ({
    type: types.DELETE_USER,
})

// add user to back
const userAdded = () => ({
    type: types.ADD_USER,
})

// editing user from getting single one of them
const editingUser = (user) => ({
    type: types.GET_ONE_USER,
    payload: user,
})

// updating user after getting
const userUpdated = () => ({
    type: types.UPDATE_USER,
})

// get users from backend
export const loadUsers = () => { 
   return function (dispatch) { 
    axios
    .get(`http://192.168.192.19:8000/tutorials/`)
    .then((response) =>{
        console.log(response);
        dispatch(getUsers(response.data));
    }).catch((error) => console.log(error))
   }
}

// delete users 
export const deleteUser = (id) => { 
    return function (dispatch) { 
     axios
     .delete(`http://192.168.192.19:8000/accounts/${id}`)
     .then((response) =>{
         console.log(response);
         dispatch(userDeleted());
         dispatch(loadUsers())
     }).catch((error) => console.log(error))
    }
 }


// add users )) 
export const addUser = (user) => { 
    return function (dispatch) { 
     axios
     .post(`http://localhost:5000/user`, user)
     .then((response) =>{
         console.log(response);
         dispatch(userAdded());
         dispatch(loadUsers())
     }).catch((error) => console.log(error))
    }
 }


 // edit users 
export const editUser = (id) => { 
    return function (dispatch) { 
     axios
     .get(`http://localhost:5000/user/${id}`)
     .then((response) =>{
         console.log(response);
         dispatch(editingUser(response.data));
     }).catch((error) => console.log(error))
    }
 }


  // UPDATE users 
export const updateUser = (user,id) => { 
    return function (dispatch) { 
     axios
     .put(`http://localhost:5000/user/${id}` , user)
     .then((response) =>{
         console.log(response);
         dispatch(userUpdated());
     }).catch((error) => console.log(error))
    }
 }
