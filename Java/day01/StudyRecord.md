# ���� �˰Ե� ��

## Overriding

- Override �ǹ�: **�����ϴ�, �ߴܽ�Ű��**
- �θ�Ŭ�������� ��ӹ��� �޼ҵ带 **����**�ϰ� **�ڽ�Ŭ�������� ������(�޼ҵ带 ����)**�ϴ� ��
- �ڽ�Ŭ�������� �޼ҵ尡 �������̵��Ǹ� �ڽ�Ŭ������ ��ü�� �������̵��� �޼ҵ带 ����� �� �ִ�.
- �������̵��� ������ ������ (**�޼ҵ��� ����(signature)**�̶�� �Ѵ�.)
    - �޼ҵ��� **�̸�** ��ġ
    - �޼ҵ��� �Ű������� **����, type, ����** ��ġ
    - �޼ҵ��� **return type** ��ġ
- `return super.method();`�� ���� ������� �ڽ�Ŭ�������� �θ�Ŭ������ �޼ҵ� ��� ����
    - ���� `return super.method() + 999;`�� ���� �������� �������̵� ����

## Overloading

- Overload �ǹ�: **�����ϴ�, ������**
- ���� �̸��� ���� �޼ҵ�鿡 ���� ���� ���� �ٸ� �Ű��������� **������** �پ��ϰ� �����ϴ� ���
    
    ```java
    func_over(int a) {
    }
    func_over(int a, int b) {
    }
    func_over(int a, int b, int c) {
    }
    ```
    
- �������̵��� ���������� **return type**�� �ٸ��� **���� �߻�**
- �������̵��� �����ε�� �и��� �������� �����Ѵ�.

## ȯ�溯��

- ȯ�溯���� �ü���� �����ϴ� ����
- JVM(�ڹ� ���� �ӽ�)�� ���� ���ø����̼ǵ��� ȯ�溯���� ���� �����Ͽ� �����Ѵ�.
- �ڹٴ� Ŭ�����н��� ȯ�溯�� CLASSPATH�� ����ϴµ� �� ���� �����ϸ� ������ ������ `-classpath` �ɼ��� ������ �ʾƵ� �Ǳ� ������ ���ϴ�.

## Ŭ�����н�(Path)

- `javac`�� ����� ������ ���� �ۼ��� `Test.java`�� �������ϰ� �Ǹ�
    
    ```java
    class Item {
    }
    class Test {
    }
    ```
    
    `Item.class, Test.class` ��� ������ ���� �����ȴ�. (���� ���ݱ��� �ϳ��� �ҽ������� �ϳ��� class���Ϸ� �����Ǵ��� �˰� �־���)
    
- `-classpath` ��ɾ �̿��� Ŭ���� ������ ��ġ�� ������ �� �ִ�.
    
    ```powershell
    java -classpath "." Test
    ```
    
    - ���� ��ɾ�� ���� �������� Ŭ���� ������ ã�� Test ���� ������ �����ϴ� ������ �Ʒ� ��ɾ�� ������ ��ɾ��.
    
    ```powershell
    java Test
    ```
    
    - Ŭ���������� �ٸ� ����(���������� lib����)�� ���� ���
    
    ```powershell
    java -classpath ".:lib" Test
    
    # MacOS ���� ��ħǥ�� �ݷ��̴�.
    # Window�� �ݷ� ��� �����ݷ� ���
    ```
    
    - ���� ������ lib�������� Ŭ���� ������ ã�� �����ϴ� ��ɾ��.
    
    ## ��Ű��
    
    - ��Ű���� ���丮��� ������ ���� �ִ�.
    - ��Ű�� ���� ������ Ŭ������ ���� �ִ�. ������ Ŭ�������� ���� �������̸� `import` �������� �������� ����.
        - `java` ���� ��ܿ� `import package_path.*;` ó�� ������Ű�� ���� Ŭ������ �ִ� ��Ű�� ��θ� `import`�ϸ� �������� ����(C�� ��������̳� �Լ� ���ϵ��� ���� ��ó��)
    - ���� ��ο��� `src/org/opentutorials/javatutorials/packages/example3/` ���� Ʈ���� `bin` �ϳ��� �����.
    - `./src/org/opentutorials/javatutorials/packages/example3/`��ο� `Selfcompile.java` ��� ������ �����Ѵ�. �Ʒ��� ������ �����̴�.
        
        ```java
        package org.opentutorials.javatutorials.packages.example3;
        public class Selfcompile{}
        ```
        
    - �ٽ� �����η� ���ƿͼ� ���� ��ɾ �̿��� �������Ѵ�.
        
        `javac src/org/opentutorials/javatutorials/packages/example3/*.java`
        
    - ���� ����� `src/org/opentutorials/javatutorials/packages/example3` ��ο� `Selfcompile.class` ������ �����ȴ�. �׷����� �츮�� `bin` ������ ������ �����ϰ� �ʹ�.
    - ������ ���� ��ɾ�� �ٽ� �������Ѵ�.
        
        `javac src/org/opentutorials/javatutorials/packages/example3/*.java -d bin`
        
        - `-d bin` �� �����ϵ� ����� bin ���丮 ������ ��ġ��Ų�ٴ� �ǹ��̴�.
        - ���� �����Ϸ��� �ڵ����� Ŭ������ ��Ű���� �ش��ϴ� ���丮���� �������ش�. (`bin/org/opentutorials/javatutorials/packages/example3` �� ���� �������)
    - ���� �ٸ� ��Ű���� ���� �̸��� Ŭ������ ������ ��� �ذ���
        1. `import`���� �̸��� �ߺ��� Ŭ���� �����ϰ� ����� Ŭ������ ��ü������ ����ϱ�
        2. �ڵ忡�� Ŭ������ ���� ��� ��ü������ ����ϱ�
            
            ```java
            public class Test {
            	public static void main(String[] args) {
            		org.opentutorials.javatutorials.packages.example3.B b = new org.opentutorials.javatutorials.packages.example3.B();
            	}
            }
            ```
            
            �̷����ϸ� ��û ���
