# PropTypes

- �θ�κ��� ���޹��� prop�� ������ Ÿ���� �˻��Ѵ�.
    
    �� �ڽĿ��� ����� ������ Ÿ�� �� �θ𿡼� �Ѱ��ִ� ������ Ÿ���� ��� �ֿܼ� ���� ��� ���
    
- JS�� ������ Ư�� ������ �ʿ��ϴ�.
- PropTypes�� �̿��� Ÿ�� ���Ǹ����ε� ���� ������ �� �� �ִ�. ������ ��� Ȥ�� ������ Ŀ�� ��� �ڵ带 ���� �ʴ��� Ÿ���� �˱� ����.

---

# promise�� async/await

- JS�� �񵿱�ó���� �ذ��ϱ� ���� ��ҵ�
- API ��� �� �߻��Ǵ� ������ �ذ��� �� �ִ�. (�����͸� ��û�ϰ� �ޱ� ���� �����͸� ����ϴ� ������ �ذ�)

## Promise(ES6)

- �񵿱� ó���� Ȱ��Ǵ� ��ü��.

### Promise�� 3���� ����

- Pending(���) - �񵿱� ���� ó���� �̿Ϸ� ����
- Fulfilled(����) - �񵿱� ���� ó���� �Ϸ�� ���·� Promise ����� ��ȯ ����
- Rejected(����) - �񵿱� ���� ó���� ���� �Ǵ� ���� ����

### Pending

```jsx
new Promise();

new Promise((resolve, reject) => {});
```

���� ���� `Promise` ��ü�� �����ϸ� ��� �����̴�. ���ڴ� `resolve`(����)�� `reject`(����)�� ���´�.

### Fulfilled

```jsx
function getData() {
	return new Promise((resolve, reject) => {
		let data = 10;
		resolve(data); // resolve�� �̿��� promise ����
	})
}

getData().then((resolvedData) => console.log(resolvedData));
```

- `resolve` �� ���ڸ� �־��ָ� `Promise` �� ����ȴ�.
- `then` �� ����� ������� ���� �� �ִ�. (`resolvedData`)

### Rejected

```jsx
function getData() {
	return new Promise((resolve, reject) => {
		reject(new Error("this is rejected!")); // reject�� �̿��� ������ ���� ����
	})
}

getData().catch((err) => console.log(err));
```

- `Promise` �� ��ü�� `reject` ���ڴ� ȣ��� ���� ���°� �ȴ�.
- `catch` �� �̿��� ������� ���ܸ� Ȯ���� �� �ִ�.

### �� �ڵ�

```jsx
function getCurPos() {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(pos => {
				center.lat = pos.coords.latitude;
				center.lng = pos.coords.longitude;
				resolve(center);
			})
		})
	}
	getCurPos().then(center => console.log(center));
```

�� �ȴ�

## async/await(ES7)

������ Promise ���� ���� ����ϰ� �ڵ� �ۼ� ����

## Async

```jsx
async function() {
	return "id";
}

const user = async() => {
	return "id";
}

// �� �� �ڵ�� ���� �ڵ�� �� �� �ִ�.
```

- �Լ� �տ� `async` Ű���带 �ٿ��� `async` �Լ��� �����.
- `async` �Լ��� `Fulfiled Promise` �� ��ȯ�Ѵ�.
- ���� �� �ڵ�� �Ʒ� �ڵ�� �����ϴٰ� �� �� �ִ�.

```jsx
user().then(("id") => console.log("id")); 
```

---

# Const

����� ������ �迭�̳� ������Ʈ ���� ����� ��ҵ��� ������ �����ϴ�.

���� ���� ������ ��ġ�� ���� �����͵� ���Ѵ� ��������.. �ҿ����� �����.

---

# ��� ���� �Լ�(IIFE)

```jsx
// ��� ���� �Լ�
	(async function() {
		const result = await navigator.geolocation.getCurrentPosition(pos => {
			center.lat = pos.coords.latitude;
			center.lng = pos.coords.longitude;
			return center.lat;
		});
	})();
```
