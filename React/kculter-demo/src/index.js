import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import App from './App';
import MapPage from './MapPage';

const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/MapPage' element={<MapPage />} />
		</Routes>
	</BrowserRouter>
);
