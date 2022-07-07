class Calculator {
	public void sum(int a, int b) {
		System.out.println(a + b);
	}

	public int getAvg(int a, int b) {
		return (a + b) / 2;
	}
}

class Carculator2 extends Calculator {
	public void sum(int a, int b) {
		System.out.println("결과는 " + (a + b) + "입니다.");
	}

	public int getAvg(int a, int b) {
		return super.getAvg(a, b);
	}
}

public class OverridingDemo {
	public static void main(String[] args) {
		Calculator c1 = new Calculator();
		Carculator2 c2 = new Carculator2();

		c1.sum(1, 2);
		c2.sum(1, 2);
		System.out.println(c1.getAvg(5, 5));
		System.out.println(c2.getAvg(5, 5));
	}
}
