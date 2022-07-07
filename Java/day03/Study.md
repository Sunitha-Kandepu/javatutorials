# for each 문

## 소개

```java
for (type var: iterate) {
	body-of-loop;
}
```

- `for`와 조건식 문법이 조금 다름
- `iterate`: 루프를 돌릴 객체
    - 가능한 자료형: 루프를 돌릴 수 있는 자료형
        - 배열
        - ArrayList
- `var`: `iterate` 객체에서 한 개씩 순차적으로 대입받음
- 반복 횟수를 명시적으로 주는 것은 불가능
- 1스탭 씩 순차적으로 반복될 때만 사용 가능

## 예시

### String 배열

```java
String[] numbers = {"one", "two", "three"};

for (String num: numbers) {
	System.out.println(num);
}
```

### ArrayList

```java
ArrayList<String> numbers = 
	new ArrayList<>(Arrays.asList("one", "two", "three");

for (String num: numbers) {
	System.out.println(num);
}
```

사용법이 똑같다.

# Array

## 소개

- 크기가 정해져 있고 정적이다.

## 다양한 선언과 초기화 방법

```java
int[] d1 = new int[3];
//int[] d1 = new int[]; <- 이런 식의 선언은 오류 발생
d1[0] = 1;

int[] d2 = {1, 2, 3};
int[] d3 = new int[]{1, 2, 3};
int[] d4;
// d4 = {1, 2, 3} <- 이런 식의 초기화는 오류 발생
d4 = new int[]{1, 2, 3} // 선언된 배열을 초기화하는 방법
```

## 출력 방법

```java
for (int i = 0; i < d1.length; i++) {
	System.out.print(d1[i]);
}
// 100 출력
System.out.println();

for (int num: d2) {
	System.out.print(num);
}
// 123 출력
```

## 알게된 것

- 선언과 초기화하는 방법이 각양각색이다.
- 자동 초기화가 된다.
- int도 `length` 사용 가능
- int도 `for each`문 사용 가능

# List

## 소개

- List 자료형은 인터페이스이다.
- `Collection` 인터페이스를 상속 받는다. → Collection 메소드 사용 가능
- List 인터페이스를 상속 받은 컬렉션들이 존재한다.

## List 컬렉션의 종류

- `ArrayList<E>`
- `LinkedList<E>`
- `Vector<E>`
- `Stack<E>`

## ArrayList<E>

- 가장 많이 사용되는 클래스
- 자료구조: 배열

### 장점

- 인덱스 → 빠른 접근

### 단점

- 정적 특성을 가진 배열이라 요소의 추가/삭제 시 소요 시간이 길다.

## LinkedList<E>

- ArrayList 클래스가 배열을 이용하여 발생하는 단점을 극복하기 위해 탄생
- 자료구조: 연결 리스트
- 비순차적 저장
- 보통 이중 연결 리스트가  좀 더 많이 사용된다.
- ArrayList와 사용 방법이 거의 동일하다.

### 장점

- 요소의 추가/삭제 시 소요 시간이 작다.

### 단점

- 순회 검색이라 소요 시간이 길다.

ArrayList와 LinkedList의 한계를 극복하기 위한 방법 → `**Hash**` 

## Vector<E>

- ArrayList와 같은 동작을 수행한다.
- ArrayList와 사용할 수 있는 메소드가 거의 같다.
- 현재는 잘 사용되지 않고 ArrayList를 사용한다.

# Hash

## 소개

- 내부적으로 배열을 사용
- 저장에서 아주 우수한 성능
- `Key`, `Value` 로 이루어져 있다.
- `Key`: 매핑용 인덱스
    - 중복X (`Hash Collision`)
- `value`: 데이터
- Hash가 내부적으로 사용하는 배열을 `Hash Table` 이라고 하며 크기에 따라 성능 차이 발생
    - Key를 테이블에 저장할 때 Hash Method를 이용해 계산한 후 그 결과값을 인덱스로 사용하여 저장하는 방식이다.
- 비순차적 저장

### 장점

- 배열보다 빠른 인덱스 접근 가능
- 데이터 추가/삭제 시 소요 시간이 적다.

### 단점

## Hash Method

- Key 값을 만드는 함수
- 데이터의 효율적 관리를 위해 임의의 길이를 가진 데이터를 고정된 길이를 가진 데이터로 매핑해주는 함수
- Hash Method를 이용해 데이터를 Table에 저장하고 검색하는 기법을 Hashing이라고 한다.
- 결과 값 → `Hash Code`

## Hash Code

- Hash로 값을 생성하면 고유의 주소값이 생성된다. 이것을 숫자로 변환한 것을 `Hash Code` 라고 부른다.
- Heap 영역의 인스턴스에 대한 참조 값

## Hash Collision

- 해쉬 충돌이라고 부른다.
- 이미 데이터가 존재하는 Key에 데이터를 넣으면 이전 값은 사라지고 나중에 들어온 값만 존재하는 현상
- 검출 속도를 느리게 만든다.
- 버킷 오버플로우를 발생시킨다.
    - 버킷 오버플로우: 버킷의 크기가 작으면 서로 다른 키를 해시함수하여 같은 해시 값이 나와 버킷이 크기를 넘을 수 있다.

### 해쉬충돌 해결법

- **Chaining**: 해쉬 충돌 발생 시 연결리스트를 이용해 데이터를 연결하는 방식
    - 추가적인 메모리를 이용해 동일한 Bucket에 연결 리스트로 하나씩 순차적으로 저장하는 것
    - **장점**: 복잡하지 않고 같은 주소 값을 그대로 사용할 수 있다.
    - **단점**: 특정 주소에 계속 쌓이게 되면 성능이 저하되고 많은 메모리를 차지한다.
- **Open Addressing**: 해쉬 충돌 발생 시 다른 Bucket에 삽입하는 방식
    - 개방 주소법
    - 3가지 방법 존재
        - **Linear Probing**: 해쉬 충돌 발생 시 다음 bucket이나 몇 개의 bucket을 건너 뛰어 데이터를 삽입하는 방식
        - **Quadratic Probing**: 해쉬 충돌 발생 시 제곱만큼 건너 뛰어 데이터를 삽입하는 방식
        - **Double Hashing**: 해쉬 충돌 발생 시 다른 해쉬 함수를 한 번 더 적용
    - 장점: 추가적인 메모리X, 오버헤드 방지
