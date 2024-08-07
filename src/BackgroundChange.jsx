import React, { useState } from 'react'

function BackgroundChange() {
	const[backgroundColor,setBackgroundColor]=useState('teal')
	
	const style={backgroundColor:backgroundColor,cursor:'pointer',height:"80px"}
	// here use backgroundColor state directly to change background color, if state name is something
	//then write 
	
	const handleClick=()=>{
		const newColor= backgroundColor==='teal'?'red':'green'
		setBackgroundColor(newColor)
	}
	
	return (
		<div className='backgroundchange' style={style}>
			<p onClick={handleClick}>
				Click me to change color
			</p>
		</div>
	)
}

export default BackgroundChange