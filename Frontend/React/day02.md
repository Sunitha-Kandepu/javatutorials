# 화면 이동

## BrowserRouter 설치

```bash
npm install react-router-dom@
```

- 주의사항: 프로젝트 폴더 내부에 설치해야 한다. 그렇지 않을 경우 Invalid hook 에러 발생

## index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './components/map';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="map" element={<Map />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## App.js

```jsx
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav
			style={{
				borderBottom: "solid 1px",
				paddingBottom: "1rem",
			}}>
			<Link to="/map">Map</Link>
		</nav>
	);
}

function App() {
  return (
    <div className="App">
		<h1>App page</h1>
		<h3>MAP Link</h3>
		<Nav></Nav>
    </div>
  );
}

export default App;
```

## components/map.js

```jsx
import React from 'react';

function map() {
	return (
		<h1>
			Map page
		</h1>
	);
}

export default map;
```
