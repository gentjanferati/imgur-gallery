const isClickedReducer = (state = false, action) =>{
    switch(action.type){
        case 'IS_CLICKED':
            return !state;
            default: 
            return state;
    }
}

export default isClickedReducer;