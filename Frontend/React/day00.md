import './App.css';

function Title(props) {
	return (
		<header>
			<h1>
				{props.title}
			</h1>
		</header>
	);
}

function List(props) {
	const list = [];

	for (const iter of props.topics) {
		list.push(<li key={iter.id}>{iter.title}</li>)
	}
	return (
		<ol>
			{list}
		</ol>
	);
}

function Article(props) {
	return (
		<article>
			<h2>{props.title}</h2>
			<body>
				{props.body}
			</body>
		</article>
	);
}

function App() {
	const topics = [
		{id: 1, title: 'html', body: 'html is ...'},
		{id: 2, title: 'css', body: 'css is ...'},
		{id: 3, title: 'javascript', body: 'javascript is ...'}
	];

  	return (
    	<div className="App">
			<Title title="Google Map"></Title>
			<List topics={topics}></List>
			<Article title="Article Title" body="contents"></Article>
    	</div>
	  );
}

export default App;
