// timer will be start from specific time

import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react'

function Timer() {
	const [time,setTime]=useState(60)
	useEffect(()=>{
		if (time>0) {
			const timer=setTimeout(() => {
				setTime(time-1)
			}, 1000);
			return ()=>clearTimeout(timer)
		}	
	},[time])
	return (
		<div className='timer'>
			Time Left : {time} second
		</div>
	)
}

export default Timer