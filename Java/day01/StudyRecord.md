# 새로 알게된 것

## Overriding

- Override 의미: **무시하다, 중단시키다**
- 부모클래스에서 상속받은 메소드를 **무시**하고 **자식클래스에서 재정의(메소드를 수정)**하는 것
- 자식클래스에서 메소드가 오버라이딩되면 자식클래스의 객체는 오버라이딩된 메소드를 사용할 수 있다.
- 오버라이딩의 조건이 존재함 (**메소드의 서명(signature)**이라고 한다.)
    - 메소드의 **이름** 일치
    - 메소드의 매개변수의 **갯수, type, 순서** 일치
    - 메소드의 **return type** 일치
- `return super.method();`와 같은 모양으로 자식클래스에서 부모클래스의 메소드 사용 가능
    - 또한 `return super.method() + 999;`와 같은 형식으로 오버라이딩 가능

## Overloading

- Overload 의미: **과적하다, 과부하**
- 같은 이름을 갖는 메소드들에 여러 개의 서로 다른 매개변수들을 **과적해** 다양하게 정의하는 기술
    
    ```java
    func_over(int a) {
    }
    func_over(int a, int b) {
    }
    func_over(int a, int b, int c) {
    }
    ```
    
- 오버라이딩과 마찬가지로 **return type**이 다르면 **오류 발생**
- 오버라이딩과 오버로드는 분명한 차이점이 존재한다.

## 환경변수

- 환경변수는 운영체제에 지정하는 변수
- JVM(자바 가상 머신)과 같은 애플리케이션들은 환경변수의 값을 참고하여 동작한다.
- 자바는 클래스패스로 환경변수 CLASSPATH를 사용하는데 이 값을 지정하면 실행할 때마다 `-classpath` 옵션을 붙이지 않아도 되기 때문에 편리하다.

## 클래스패스(Path)

- `javac`를 사용해 다음과 같이 작성된 `Test.java`를 컴파일하게 되면
    
    ```java
    class Item {
    }
    class Test {
    }
    ```
    
    `Item.class, Test.class` 라는 파일이 각각 생성된다. (나는 지금까지 하나의 소스파일이 하나의 class파일로 생성되는지 알고 있었음)
    
- `-classpath` 명령어를 이용해 클래스 파일의 위치를 지정할 수 있다.
    
    ```powershell
    java -classpath "." Test
    ```
    
    - 위의 명령어는 현재 폴더에서 클래스 파일을 찾아 Test 실행 파일을 실행하는 것으로 아래 명령어와 동일한 명령어다.
    
    ```powershell
    java Test
    ```
    
    - 클래스파일이 다른 폴더(예제에서는 lib폴더)에 있을 경우
    
    ```powershell
    java -classpath ".:lib" Test
    
    # MacOS 기준 마침표와 콜론이다.
    # Window는 콜론 대신 세미콜론 사용
    ```
    
    - 현재 폴더와 lib폴더에서 클래스 파일을 찾아 실행하는 명령어다.
    
    ## 패키지
    
    - 패키지는 디렉토리라고 생각할 수도 있다.
    - 패키지 마다 각각의 클래스를 갖고 있다. 각각의 클래스들은 서로 독립적이며 `import` 이전에는 의존성이 없다.
        - `java` 파일 상단에 `import package_path.*;` 처럼 의존시키고 싶은 클래스가 있는 패키지 경로를 `import`하면 의존성이 생김(C의 헤더파일이나 함수 파일들을 엮을 때처럼)
    - 현재 경로에서 `src/org/opentutorials/javatutorials/packages/example3/` 폴더 트리와 `bin` 하나를 만든다.
    - `./src/org/opentutorials/javatutorials/packages/example3/`경로에 `Selfcompile.java` 라는 파일을 생성한다. 아래는 파일의 내용이다.
        
        ```java
        package org.opentutorials.javatutorials.packages.example3;
        public class Selfcompile{}
        ```
        
    - 다시 현재경로로 돌아와서 다음 명령어를 이용해 컴파일한다.
        
        `javac src/org/opentutorials/javatutorials/packages/example3/*.java`
        
    - 위의 결과로 `src/org/opentutorials/javatutorials/packages/example3` 경로에 `Selfcompile.class` 파일이 생성된다. 그렇지만 우리는 `bin` 폴더에 파일을 생성하고 싶다.
    - 다음과 같은 명령어로 다시 컴파일한다.
        
        `javac src/org/opentutorials/javatutorials/packages/example3/*.java -d bin`
        
        - `-d bin` 은 컴파일된 결과를 bin 디렉토리 하위에 위치시킨다는 의미이다.
        - 또한 컴파일러는 자동으로 클래스의 패키지에 해당하는 디렉토리들을 생성해준다. (`bin/org/opentutorials/javatutorials/packages/example3` 와 같은 모양으로)
    - 서로 다른 패키지에 같은 이름의 클래스가 존재할 경우 해결방법
        1. `import`에서 이름이 중복된 클래스 제외하고 사용할 클래스를 구체적으로 명시하기
        2. 코드에서 클래스의 파일 경로 구체적으로 명시하기
            
            ```java
            public class Test {
            	public static void main(String[] args) {
            		org.opentutorials.javatutorials.packages.example3.B b = new org.opentutorials.javatutorials.packages.example3.B();
            	}
            }
            ```
            
            이렇게하면 엄청 기네
