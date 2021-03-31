const initialstate = {
    id: '',
    clicked: false

}
const idReducer = (state = initialstate, action) => {
    switch(action.type){
        case 'GET_ID':
            return{  
                
                id: action.payload,
                clicked:  !state.clicked
            }
            default:
                return state;
    }
}

export default idReducer;