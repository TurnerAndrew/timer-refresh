import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'


const TimerF = () => {

    let [timer, setTimer] = useState(8)
    let [data, setData] = useState()
    

    useEffect(() => {
       const interval = setInterval(() => setTimer(timer - 1), 1000)
       if(timer === 0) {
           axios.get('https://random-data-api.com/api/food/random_food').then(res => setData(res.data), setTimer(8))
    }
    return () => {
        clearInterval(interval)
    }
    }, [timer])

  return <div>
      <h1>{timer}</h1>
      {data ? <h1>{data.dish}</h1> : null}
  </div>;
};

export default TimerF;
 