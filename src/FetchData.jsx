// fetch data from api

import React, { useEffect, useState } from 'react'

function FetchData() {

    const [data, setData] = useState(null)
    // to fetch data use useEffect

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json()
                .then((json) => setData(json)))
    }, [])
    return (
        <div className='fetchdata'>
            {
                data ?
                    (
                        <div>
                            <h1>Title: {data.title}</h1>
                            <h1>Body: {data.body}</h1>
                        </div>
                    ) :
                    (
                        <p>
                            Loading
                        </p>
                    )
            }
        </div>
    )
}

export default FetchData

// jsonplaceholder.typicode.com/posts/1