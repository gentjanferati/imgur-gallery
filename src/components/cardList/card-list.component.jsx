import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';
import {useSelector , useDispatch } from 'react-redux';
import {getId} from '../../redux/actions/index';

function CardList (props) {
    const dispatch = useDispatch();
    const idid = useSelector(state => state.id);
    const kliked = useSelector(state => state.clicked)
    console.log(idid.clicked);
    console.log("testi tjeterrr" + kliked)
    return ( 
    <div className = 'card-list' >
        {props.images.map(({id, ...otherProps} )=> (
        <div key={id} onClick={ () => dispatch(getId(id))}>
        <Card  {...otherProps}/>
        </div>
     ))}</div>
    );
};
export default CardList;