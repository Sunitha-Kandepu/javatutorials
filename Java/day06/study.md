# BufferedReader / BufferedWriter

- `Scanner/System.out.println` ���� ���� �ӵ��� �����ִ� �޼ҵ�
- C����� `write/read` �� ����ϴ�.

## ���� �ڵ�

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

### �ڵ� ����

1. `BufferedReader/BufferedWriter` �� ����ϱ� ���� `import` ���
2. `BufferedReader` �� �޼ҵ��� `readLine()` ���� `throws Exception` �� �ʿ��ϴ�.
    
    �� `InputStream == null` �� �� �߻��� ���� �ִ� ������ �����ϱ� ����
    
3. `InputStream` Ÿ�� ���� `is` �� `System.in` ���� �ʱ�ȭ
    
    �� `InputStream` : Java ���� ����ϴ� �Է� ��Ʈ��
    
    �� `System.in` : [`InputStream` Ÿ���� ���� �ʵ�]�̸� [ǥ�� �Է� ��Ʈ��]�̴�.
    
    �� ���� `InputStream` �� `System.in` ������ �Է��� �����ϴ�.
    
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
    
    �� �׷��� �� �ڵ�� ���� ����غ��� �Է��� ���� �ٸ� ���� ���´�.
    
    ```java
    > 9  // �Է�
    > 57 // ���
    
    > 999 // �Է�
    > 57  // ���
    ```
    
    - ����: `InputStream.read()` �� Ư¡ ������ �̷� ������ �߻��Ѵ�.
        - `InputStream.read()` �� Ư¡
            - �Է¹��� �����ʹ� `int` ������ ����Ǵµ� �̴� �ش� ������ �ý��� �Ǵ� �ü���� ���ڵ� ������ 10������ ������ ����ȴ�.
            - 1 Byte�� �д´�.
    - ����, ���� ������� �ƽ�Ű �ڵ�� ����Ѵ�. ��) 0 �Է� �� 48 ��� / a �Է� �� 97 ���
    - 1 Byte�� �д� Ư�� ������ �� ���ڸ��� ���ڸ� �а� �� ���� ���ڵ��� ©���� ������ �߻��Ѵ�.
    
    **���� Ư�� ������ `InputStreamReader/Writer` �� ����Ѵ�.**
    

- `InputStreamReader` : ���ڽ�Ʈ�� (UTF-8�� �����Ѵ�. `InputStream` �� �ٸ� ���̴�. `InputStream` �� UTF-16�̴�.)
