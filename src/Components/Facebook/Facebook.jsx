import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Facebook() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://gnews.io/api/v4/search?q="FMI"&lang=es&token=0eefc7f21b5ae2d950fd10dc040c6bcb`)
            .then((res) => res.json())
            .then((data) => {

                setData(data)

            })
    }, []);
    console.log(data)
    return (
        <div style={{ height: '500px', width: '100%', border: '1px solid black' }}>

            {data.articles && data.articles.map((item) => (    
<div>
                      
    
                            
                          <p>{console.log(item.content)}</p>
                          <img src={item.image}></img>

                        </div>
            ))}
        </div>
    )





    // <h1> {data.articles[0].image} </h1>

}

