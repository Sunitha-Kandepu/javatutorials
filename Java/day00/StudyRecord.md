# Java의 역사

> Write Once, Run Anywhere
> 
- 1995년 썬 마이크로시스템즈의 제임스 고슬링과 그의 동료들에 의해 시작된 프로젝트
- 초기에는 가전제품을 제어하기 위한 언어로 고안
- 객체 지향
- C언어와 유사
- 컴파일된 언어가 플랫폼 독립적
    1. 자바 소스 파일을 바이트코드라는 특수한 바이너리 형태로 변환한다.
    2. 바이트코드를 실행하기 위해서는 JVM이라는 특수한 가상머신이 필요하다.
    3. JVM은 자바 바이트코드를 어느 플랫폼에서나 동일한 형태로 실행시킨다.
- 현재 주류 언어

# 자바의 코드 생성과 파일 실행 과정

1. 소스코드 작성
    
    ```java
    /*
    파일 이름
    HelloWorld.java
    */
    
    class HelloWorld {
    	public static void main(String[] args) {
    		System.out.println("Hello Wolrd!");
    	}
    }
    ```
    
2. 작성한 파일을 컴파일
    
    ```powershell
    javac HelloWorld.java
    
    # 위의 명령을 실행하면
    # HelloWorld.class 라는 실행 파일이 생성된다.
    ```
    
3. 런처를 사용해 파일 실행
    
    ![스크린샷 2022-06-15 오후 3.15.43.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e25a88c-7f3c-436a-a4a1-1aaba6968daa/스크린샷_2022-06-15_오후_3.15.43.png)
    

# 새로 알게된 것

- 자바에서 `static` 을 이용해 `static변수, static메소드`를 만들 수 있다. 이 둘을 클래스(정적)멤버라고 한다.
    
    
    | Static | Heap |
    | --- | --- |
    | 주로 클래스 | 주로 인스턴스 |
    | Gabage Collector X | Gabage Collector O |
    | 모든 객체가 메모리를 공유 | 메모리 공유 X |
    | Static Field | Non-Static Field |
    - Garbage Collector 관여 **X** (== 프로그램 종료시까지 메모리가 할당되어 있음)
- 클래스 멤버와 인스턴스 멤버 사이의 차이점에 대해 잘 알아야 한다.
    - 인스턴스 객체에선 클래스, 인스턴스 멤버 모두 접근 가능
    - **그러나** 클래스 객체에선 클래스 멤버에만 접근 가능
- 우선순위: 전역변수 < 지역변수
- 정적 스코프 (렉시컬 스코프)
- `extends` - 상속
- 자식클래스에서 생성자 사용할 때 오류 뜰 경우 부모클래스에 빈생성자 유무 확인(있어야 함)
- `super()` - 부모클래스의 생성자 사용
