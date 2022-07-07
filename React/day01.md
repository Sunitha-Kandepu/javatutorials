```jsx
import './App.css';
import {useState} from 'react';

function Header(props) {
	return (
		<header>
			<h1><a href="/" onClick={event => {
					event.preventDefault();
					props.onChangeMode();
				}}>{props.title}</a></h1>
		</header>
	);
}

function Nav(props) {
	const list = [];

	for (const iter of props.topics) {
		list.push(
			<li key={iter.id}>
				<a id={iter.id} href={'/read/'+iter.id} onClick={event => {
					event.preventDefault();
					props.onChangeMode(Number(event.target.id));
				}}>{iter.title}</a>
			</li>);
	}
	return (
		<nav>
			<ol>
				{list}
			</ol>
		</nav>
	);
}

function Article(props) {
	return (
		<article>
			<h2>{props.title}</h2>
			{props.body}
		</article>
	);
}

function Create(props) {
	return (
		<article input="text">
			<h2>Create</h2>
			<form onSubmit={event => {
				event.preventDefault();
				const title = event.target.title.value;
				const body = event.target.body.value;
				props.onCreate(title, body);
			}}>
				<p><input type="text" name="title" placeholder="title"></input></p>
				<p><textarea name="body" placeholder="body"></textarea></p>
				<input type="submit" value="create"></input>
			</form>
		</article>
	)
}

function App() {
	const [mode, setMode] = useState(null);
	const [id, setId] = useState(null);
	const [nextid, setNextid] = useState(4);
	const [topics, setTopics] = useState([
		{id: 1, title: 'html', body: 'html is ...'},
		{id: 2, title: 'css', body: 'css is ...'},
		{id: 3, title: 'javascript', body: 'javascript is ...'}
	]);

	let content = null;
	if (mode === 'Welcome') {
		content = <Article title="Welcome" body="Hello, Web!"></Article>;
	} else if (mode === 'Read') {
		let title, body;
		for (const iter of topics) {
			if (iter.id === id) {
				title = iter.title;
				body = iter.body;
			}
		}
		content = <Article title={title} body={body}></Article>;
	} else if (mode === 'Create') {
		content = <Create onCreate={(title, body) => {
			const newTopic = {id: nextid, title:title, body:body};
			const newTopics = [...topics];
			newTopics.push(newTopic);
			setTopics(newTopics);
			setMode('Read');
			setId(nextid);
			setNextid(nextid + 1);
		}}></Create>
	}

  	return (
    	<div className="App">
			<Header title='WEB' onChangeMode={() => {
				setMode('Welcome');
			}}></Header>
			<Nav topics={topics} onChangeMode={_id => {
				setMode('Read');
				setId(_id);
			}}></Nav>
			{content}
			<a href="/Create" onClick={(event) => {
				event.preventDefault();
				setMode('Create');
			}}>Create</a>
    	</div>
	  );
}

export default App;
```
