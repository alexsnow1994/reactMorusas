export default  (globalState, action) => {
    console.log(action);
    switch(action.type){
        case "GET_ALL_BOOKS":
            return {
                ...globalState,
                books: action.payload
            }
        default:
            return globalState
    }
};