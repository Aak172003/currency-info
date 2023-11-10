

import { useEffect } from 'react';
import { useState } from 'react';

function useCurrencyInfo(currency) {

    // after getting data from api call , store the data into objects 
    const [data, setData] = useState({});
    // call api

    useEffect(() => {

        // fetch call
        // data string form me transfer hota hai , but jb get krte hai usko json me change kr dete hai 

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))

        console.log(data)


    }, [currency])

    console.log(data);
    return data
}

export default useCurrencyInfo;