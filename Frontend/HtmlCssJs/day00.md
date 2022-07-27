# �򰥸��� align, justify

### justify: ���� ����

### align: ������ (���� ���� ����)

flex-direction���� ���� �ٲ� �� �ֱ� ������ ���� ���� �����ؾ� �Ѵ�.

## ����

### �⺻ �ڵ�

### html

```html
<!DOCTYPE html>
<head>
	<link rel="stylesheet" href="./index.css">
	<title>Document</title>
</head>
<body>
	<div class="wrap">
		<div class="items">
			a
		</div>
		<div class="items">
			b
		</div>
		<div class="items">
			c
		</div>
	</div>
</body>
</html>
```

### css

```css
.wrap {
	height: 100%;
	display: flex;
}

.items {
	border: solid 5px black;
	width: 100px;
	height: 100px;
	text-align: center;
}

.wrap div:nth-child(1) {
	background-color: pink;
}

.wrap div:nth-child(2) {
	background-color: greenyellow;
}

.wrap .items:nth-child(3) {
	background-color: skyblue;
}
```

1. ���� ������ �⺻��(row)�� ��

```css
.wrap {
	height: 100%;
	display: flex;
	justify-content: center;
}
```

- ���� ����� ��� ������ �ȴ�.
1. ���� ������ column�� ��

```css
.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
```

- ���� ��� ���� ��� ������ �ȴ�.

# �򰥸��� items, self, content

### items

- ��� ���(items)���� ��ġ�� �����ش�.

```jsx
.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
```

���� ���ÿ� �Ȱ���.

### self

- Ư�� ����� ��ġ�� �������ش�.

```css
.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.items {
	border: solid 5px black;
	width: 100px;
	height: 100px;
	text-align: center;
}

.wrap div:nth-child(1) {
	background-color: pink;
}

.wrap div:nth-child(2) {
	background-color: greenyellow;
	align-self: flex-start; /* �� �κ��� �ǵ���ָ� �ȴ�. */
}

.wrap .items:nth-child(3) {
	background-color: skyblue;
}
```

### content

- ��ҵ��� �� ������ �����Ѵ�. ������ �� �� �̻����� �̷���� ��ҵ鿡���� �۵��Ѵ�.

```css
.wrap {
	height: 100%;
	display: flex;
	justify-content: space-between;
}
```
