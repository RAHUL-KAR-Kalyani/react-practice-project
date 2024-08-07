import React from 'react'
import './App.css'
import Helloworld from './Helloworld'
import Counter from './Counter'
import UserInputForm from './UserInputForm'
import DisplayList from './DisplayList'
import ToggleSwitch from './ToggleSwitch'
import FetchData from './FetchData'
import Timer from './Timer'
import BackgroundChange from './BackgroundChange'
import Routing from './Routing'
import RandomQuote from './RandomQuote'
import UploadImage from './UploadImage'
import LogIn from './LogIn'
import Registration from './Registration'

function App() {
	return (
		<div>
			<Helloworld/>
			<hr />
			<Counter/>
			<hr />
			<UserInputForm/>
			<hr />
			<DisplayList/>
			<hr />
			<ToggleSwitch/>
			<hr />
			<FetchData/>
			<hr />
			<Timer/>
			<hr />
			<BackgroundChange/>
			<hr />
			<Routing/>
			<hr />
			<RandomQuote/>
			<hr />
			<UploadImage/>
			<hr />
			<LogIn/>
			<hr />
		</div>
	)
}

export default App