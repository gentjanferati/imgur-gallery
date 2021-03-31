import React from 'react';
import './card.styles.css'


function Card({ title, description, downs, images, layout, type, link, ...otherProps }) {



    if (images != null) {
        const str1 = "video/mp4"
        let str2 = images[0].type
        
        let str = str1.localeCompare(str2)
        
        let imglink = images[0].link;
        
        
        let video = true;
        if (str !== 0) {
            video = false;
        }

        return (
            <div className='card-container'  >
                {video ?
                    <video width="300" height="250" >
                        <source src={imglink} type="video/mp4" />
                    </video>
                    :
                    <img alt="ima" src={imglink} />
                }
                <h1>{title}</h1>
            </div>

        );
    }
    else {
        let alt = "nuk ka imazhe"
        return (
            <div className='card-container'>
                <img alt={alt} src="" />
                <h1>{title}</h1>

            </div>

        );
    }
}

export default Card;