// basic toggle switch
import React, { useState } from 'react'

function ToggleSwitch() {
	const [isToggle, setIsToggle] = useState(false);

	const toggleswitch = () => {
		setIsToggle(!isToggle);
	}
	const color=isToggle?'red':'teal'

	return (
		<div className='toggleswitch' style={{backgroundColor:color}}>
			<label htmlFor="">
				<input type="checkbox" onChange={toggleswitch} />
			</label>
			<p>{isToggle ? 'Toggle On' : 'Toggle Off'}</p>
		</div>
	)
}

export default ToggleSwitch