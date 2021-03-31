export const getId = (id) =>{
    return {
        type: 'GET_ID',
        payload: id
    }
}

export const isClicked = () =>{
    return {
        type: 'IS_CLICKED'
    }
}