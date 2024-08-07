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
import Weatherapp from './Weatherapp'
import SearchItems from './SearchItems'

function App() {
	const items=['Items 1','Item 2','Item 3','Another Item','Another Item 2']
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
			{/* <hr /> */}
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
			<Weatherapp />
			<hr />
			<SearchItems items={items}/>
		</div>
	)
}

export default App