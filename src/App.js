import "./App.css";
import Header from "./components/home/header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePages from "./components/pagecontent/HomePages";


function App() {
	return (
		<div className="App">
			<Router>
				<Header/>
				<Routes>
					<Route path="/" exact Component={HomePages}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
