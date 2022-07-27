### Ŭ���� ������Ʈ

- JS Ŭ�������� ���� Ŭ������ �����ڸ� ������ �� �׻� `super`�� ȣ���ؾ� �Ѵ�.
    - ��� React ������Ʈ Ŭ������ �����ڸ� ���� �� `super(props)`�� ȣ���ؾ� �Ѵ�.
- React ������Ʈ�� �����ڿ� `this.state` �� �����ϴ� ������ `state` �� ���� �� �ִ�.
    - `this.state` �� ������ React ������Ʈ�� ���� ������� �����ؾ� �Ѵ�.
- ������Ʈ���� `setState` �� ȣ���ϸ� React�� �ڵ����� ������Ʈ ������ �ڽ� ������Ʈ ���� ������Ʈ�Ѵ�.
    - ex: A������Ʈ���� setState ȣ�� �� A������Ʈ�� �ڽ� ������Ʈ�� A�� ������Ʈ �Բ� ������Ʈ

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
			// React ���� �������� �����ϴ� �������� ���� �ڵ� ��ġ
			// onClick �ڵ鷯�� ���� this.setState�� ȣ���ϴ� ������
			// React���� <button>�� Ŭ���� �� Square�� �ٽ� �������ؾ� �Ѵٰ� �˸� �� �ִ�.
			// ������Ʈ ���Ŀ� Square�� this.state.value�� 'X'�� �Ǿ� ���� �ǿ� ��Ÿ�� ���̴�.
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

### �Լ� ������Ʈ

- React���� �Լ� ������Ʈ�� �� �����ϰ� ������Ʈ�� �ۼ��ϴ� ����̸�, `state` ���� `render` �Լ����� ������.
- `React.Component` �� Ȯ���ϴ� Ŭ������ �����ϴ� ��� `props`�� �Է¹޾Ƽ� �������� ����� ��ȯ�ϴ� �Լ��� �ۼ��� �� �ִ�.

# �ñ��Ѱ�

1. **Arrow Function ���� �Ű����� �Ѱ��ִ°Ŷ� props�� �Ѱ��ִ°� ����**
    - `<Component �Ӽ���={i} />` �̷� ������ �Ѱ��ִ� ��: `props.i`
    - `{function(i)}` �̷� ������ �Ѱ��ִ� ��: `i`
