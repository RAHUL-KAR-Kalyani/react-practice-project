import React, { useState } from 'react'

function UploadImage() {
	const [file, setFile] = useState(null)	// null means nothing
	function handleFileChange(e) {
		const selectedFile = e.target.files[0];
		setFile(selectedFile)
	}

	return (
		<div className='uploadimage'>
			<input type="file" accept='image/*' onChange={handleFileChange} />
			{file && <img src={URL.createObjectURL(file)} alt='Uploaded' />}

			{/* 
				here if file is true then only content afte && will render.
				this is called conditional rendering. it can be write with ternery operator
			*/}
		</div>
	)
}

export default UploadImage