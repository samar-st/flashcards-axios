import * as types from "./actionType";

const initialState = { 
    users:[],
    user:{},
    loading: true,
};

const userReducers = (state = initialState, action) => { 
    
    switch (action.type) { 
                // get user
        case types.GET_USERS:
        return { 
            ...state,
            users: action.payload,
            loading:false
        };

        // delete user

        case types.DELETE_USER:
            // Add user
        case types.ADD_USER:
            // update userr
        case types.UPDATE_USER:
            return{
                ...state,
                loading:false
            };
            
        case types.GET_ONE_USER:
            return { 
                ...state,
                user: action.payload,
                loading:false,
            }
        default: 
        return state;
    }


};

export default userReducers;