import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Facebook() {
    const  [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://graph.facebook.com/100049801391389?metadata=1&access_token=EAASZCmmPIGgABAOFIRgsaTIbak56Aue9wlcu1o0Y9D5fl9TZCEzlY9pRXNi4dxuEKQWBm5cut1jBjwW5dPK1UEWQ2sUvo59zRG00dS0aXquHhUS0spzmjzOY0doGPT0dmqjRvqf88JNKHoKDhkZAaePzM2LoZBbWPIWfTHYPjNmSyrannvsR0bKMhTIUuZCLz5aZBbsvZAgJI3jPuteqSaW")
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

