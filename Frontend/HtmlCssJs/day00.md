# 헷갈리는 align, justify

### justify: 축의 방향

### align: 교차축 (축의 수직 방향)

flex-direction으로 축이 바뀔 수 있기 때문에 위와 같이 생각해야 한다.

## 예시

### 기본 코드

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

1. 축의 방향이 기본값(row)일 때

```css
.wrap {
	height: 100%;
	display: flex;
	justify-content: center;
}
```

- 위의 결과는 가운데 정렬이 된다.
1. 축의 방향이 column일 때

```css
.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
```

- 위의 결과 또한 가운데 정렬이 된다.

# 헷갈리는 items, self, content

### items

- 모든 요소(items)들의 위치를 정해준다.

```jsx
.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
```

위의 예시와 똑같다.

### self

- 특정 요소의 위치를 지정해준다.

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
	align-self: flex-start; /* 이 부분을 건드려주면 된다. */
}

.wrap .items:nth-child(3) {
	background-color: skyblue;
}
```

### content

- 요소들의 줄 간격을 조절한다. 무조건 두 줄 이상으로 이루어진 요소들에서만 작동한다.

```css
.wrap {
	height: 100%;
	display: flex;
	justify-content: space-between;
}
```
