# BufferedReader / BufferedWriter

- `Scanner/System.out.println` 보다 빠른 속도를 보여주는 메소드
- C언어의 `write/read` 와 비슷하다.

## 예시 코드

```java
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;

public class Buffers {
	public static void main(String[] args) throws IOException {
		InputStream is = System.in;
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);

		OutputStream os = System.in;
		OutputStreamWriter osw = new OutputStreamWrite(os);
		BufferedWriter bw = new BufferedWriter(osw);
		
		int input = br.readLine();
		br.close();
		bw.write(input);
		bw.flush();
		bw.close();
	}
}
```

### 코드 설명

1. `BufferedReader/BufferedWriter` 를 사용하기 위한 `import` 목록
2. `BufferedReader` 의 메소드인 `readLine()` 에서 `throws Exception` 이 필요하다.
    
    → `InputStream == null` 일 때 발생할 수도 있는 오류를 방지하기 위해
    
3. `InputStream` 타입 변수 `is` 를 `System.in` 으로 초기화
    
    → `InputStream` : Java 에서 사용하는 입력 스트림
    
    → `System.in` : [`InputStream` 타입의 정적 필드]이며 [표준 입력 스트림]이다.
    
    → 위의 `InputStream` 과 `System.in` 만으로 입력이 가능하다.
    
    ```java
    import java.io.IOException;
    import java.io.InputStream;
    
    public class Main {
    	public static void main(String[] args) throws IOException {
    		InputStream inputstream = System.in;
    		int a = inputstream.read();
    		System.out.println(a);
    	}
    }
    ```
    
    → 그러나 위 코드로 값을 출력해보면 입력한 값과 다른 값이 나온다.
    
    ```java
    > 9  // 입력
    > 57 // 출력
    
    > 999 // 입력
    > 57  // 출력
    ```
    
    - 이유: `InputStream.read()` 의 특징 때문에 이런 현상이 발생한다.
        - `InputStream.read()` 의 특징
            - 입력받은 데이터는 `int` 형으로 저장되는데 이는 해당 문자의 시스템 또는 운영체제의 인코딩 형식의 10진수로 변수에 저장된다.
            - 1 Byte만 읽는다.
    - 문자, 숫자 상관없이 아스키 코드로 출력한다. 예) 0 입력 → 48 출력 / a 입력 → 97 출력
    - 1 Byte만 읽는 특성 때문에 맨 앞자리의 숫자만 읽고 그 뒤의 숫자들은 짤리는 현상이 발생한다.
    
    **위의 특성 때문에 `InputStreamReader/Writer` 를 사용한다.**
    

- `InputStreamReader` : 문자스트림 (UTF-8을 지원한다. `InputStream` 과 다른 것이다. `InputStream` 은 UTF-16이다.)
