import React from "react";
import './cardDetails.styles.css';
import {getId} from '../../redux/actions/index';
import { useDispatch } from 'react-redux';

function CardDetails(props){
console.log(props)
        const str1 = "video/mp4"
        let str2 = props.details.images[0].type
        console.log(str2)
        let str = str1.localeCompare(str2)
        console.log(str)
        let imglink = props.details.images[0].link;
        let video = true;
        if(str !== 0 ){
            video = false;
            console.log(video)
        }
const dispatch = useDispatch();
    return(
        <div className="container"  >
        <div className="bg-opacity" onClick={ () => dispatch(getId(null))}></div>
        <div className="bg">
            <div className="bg2">
            {video ?
            <video width="600" height="300" controls>
                     <source src={imglink} type="video/mp4"/>
                    </video>
                    :
                    <img alt="sad" src={imglink}/>
                     }
            
            <h1>{props.details.title}</h1>
            
            <p>{props.details.description}</p>
            <p>UP Votes: {props.details.ups}</p>
            <p>Down Votes: {props.details.downs}</p>
            <p>Score {props.details.score}</p>
            </div>
        </div></div>

    );
}

export default CardDetails;