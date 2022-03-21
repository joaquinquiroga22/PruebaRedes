import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Facebook() {
    const  [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://graph.facebook.com/search?q=auto&type=POST&access_token=EAASZCmmPIGgABAP7TgD8ZCWxHckuzujnzYZCfDltCBZCWVZBSjxtTfLX5XPlZBEHSCyBupAcPGxmQIodqpZAXWImAy1EZCPxNS4bD7N8mtmXTAKHZAmMAUteDRoL00oRJfau9HgF8M4sj53yj4IOOLqq9PPHoBZAx3znEpSGlL2BZAl73wzdNnlFXkZCyL6vShPQEiKgLiya7lIHu2uBA0GInvzA`)
         .then((res) => res.json())
         .then((data) =>{
             
              setData(data)
              console.log(data);
         })
        },[]);
console.log(data)
        return (
            <div>
                 {/* <img src={data.picture.data.url} alt="img" />  */}
                <h1>hola</h1>
            </div>
        )
 }

