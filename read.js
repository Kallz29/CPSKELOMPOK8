import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import {db} from "./configFirebase"

function SensorData() {
    const [smoke, setSmoke] = useState("");
    const [temp, setTemp] = useState("");

    useEffect(() => {
        const smokeRef = ref(db, "/smoke");
        const tempRef = ref(db, "/temp");  
        
        const unsubscribeSmoke = onValue(smokeRef, (snapshot) => {
        const data = snapshot.val(); 
        setSmoke(data + "PPM");
        });

        const unsubscribeTemp = onValue(tempRef, (snapshot) => {
        const data = snapshot.val(); 
        setTemp(data + "°C");
        });

    return () => {
        unsubscribeSmoke();
        unsubscribeTemp();
    };
}, []);

    return(
        <div className='data-container'>
            <div className='data-content'>
                <div className='data-item'>
                <h1>Realtime Database</h1>
                    <h2>Smoke</h2>
                    <p className='value' id='smoke'>
                        {smoke}
                    </p>
                </div>
                <div className='data-item'>
                    <h2>Temp</h2>
                    <p className='value' id='temp'>
                        {temp}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SensorData;