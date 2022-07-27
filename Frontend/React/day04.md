### 클래스 컴포넌트

- JS 클래스에서 하위 클래스의 생성자를 정의할 때 항상 `super`를 호출해야 한다.
    - 모든 React 컴포넌트 클래스는 생성자를 가질 때 `super(props)`를 호출해야 한다.
- React 컴포넌트는 생성자에 `this.state` 를 설정하는 것으로 `state` 를 가질 수 있다.
    - `this.state` 는 정의한 React 컴포넌트에 대해 비공개로 간주해야 한다.
- 컴포넌트에서 `setState` 를 호출하면 React는 자동으로 컴포넌트 내부의 자식 컴포넌트 역시 업데이트한다.
    - ex: A컴포넌트에서 setState 호출 → A컴포넌트와 자식 컴포넌트인 A’ 컴포넌트 함께 업데이트

```jsx
class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}
	render() {
		return (
			// React 공식 문서에서 권장하는 가독성을 위한 코드 배치
			// onClick 핸들러를 통해 this.setState를 호출하는 것으로
			// React에게 <button>을 클릭할 때 Square가 다시 렌더링해야 한다고 알릴 수 있다.
			// 업데이트 이후에 Square의 this.state.value는 'X'가 되어 게임 판에 나타날 것이다.
			<button
				className="square"
				onClick={() => this.props.onClick()}
			>
				{this.props.value}
			</button>
		);
	}
}
```

### 함수 컴포넌트

- React에서 함수 컴포넌트는 더 간단하게 컴포넌트를 작성하는 방법이며, `state` 없이 `render` 함수만을 가진다.
- `React.Component` 를 확장하는 클래스를 정의하는 대신 `props`를 입력받아서 렌더링할 대상을 반환하는 함수를 작성할 수 있다.

# 궁금한거

1. **Arrow Function 으로 매개변수 넘겨주는거랑 props로 넘겨주는거 차이**
    - `<Component 속성명={i} />` 이런 식으로 넘겨주는 놈: `props.i`
    - `{function(i)}` 이런 식으로 넘겨주는 놈: `i`
