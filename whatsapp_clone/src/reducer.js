
// Declaring InitialState - contains all variables which you want to use later on for deep layers. Predefined user variable with default value.
export const initialState = {
    user: null
}


// Actiontype defines what kind of dispatch is that and based on that inside reducer, we have created a way to update it, by using current state and action we want to perform on the object.
export const actionTypes = {
    SET_USER: "SET_USER"
}


const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state, user: action.user
            }
        default:
            return state;
    }
}

export default reducer;