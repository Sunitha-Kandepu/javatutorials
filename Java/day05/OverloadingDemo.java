public class OverloadingDemo {
	
	public void printHello() {
		System.out.println("Hello!");
	}

	public void printHello(String name) {
		System.out.println("Hello~ " + name);
	}

	public void printHello(int age, String name) {
		System.out.println("Hello! " + "my age is " + age);
		System.out.println("my name is " + name);
	}
	
	public static void main(String[] args) {
		OverloadingDemo od = new OverloadingDemo();
	
		od.printHello();
		od.printHello("Jeon");
		od.printHello(28, "Jeon");
	}
}

