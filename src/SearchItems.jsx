// build a search bar that filters alist of items a based on user input
import React, { useState } from 'react'

function SearchItems({ items }) {
    const [searchTerm,setSearchTerm]=useState('');
    const filterItem=items.filter((item)=>item.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div>
            <input type="text" placeholder='Search' onChange={(e)=>setSearchTerm(e.target.value)}/>
            <ul>
                {
                    filterItem.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchItems