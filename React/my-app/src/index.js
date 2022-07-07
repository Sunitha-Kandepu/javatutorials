import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapAPI from './components/MapAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	{/* 

	BrowserRouter:
	HTML은 여러 페이지를 이용해 화연을 표현한다.
	그러나 리액트는 하나의 페이지 안에서만 동적으로 화면을 바꿔가며 표현한다.
	따라서 새 페이지를 로드할 때의 부하가 없고, 기존 방식보다 매우 효율적이다. 
	
	*/}
	<BrowserRouter>
		{/*

		Routes:
		Route들을 구성하는 부모 요소
		
		*/}
		<Routes>
			{/*
			
			Route:
			랜더링할 컴포넌트를 지정한다.

			Route 작성 예시:
			<Route path="경로" element={경로접근 시 렌더링할 컴포넌트} />
			
			*/}
			<Route path="/" element={<App />} />
			<Route path="MapAPI" element={<MapAPI />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
