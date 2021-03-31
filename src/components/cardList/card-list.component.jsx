import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';
import { useDispatch } from 'react-redux';
import { getId } from '../../redux/actions/index';

function CardList(props) {
    const dispatch = useDispatch();
    return (
        <div className='card-list' >
            {props.images.map(({ id, ...otherProps }) => (
                <div key={id} onClick={() => dispatch(getId(id))}>
                    <Card  {...otherProps} />
                </div>
            ))}</div>
    );
};
export default CardList;