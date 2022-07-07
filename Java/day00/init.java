class Calculator {
	int left, right;

	public Calculator(int left, int right) {
		this.left = left;
		this.right = right;
	}

	public void sum() {
		System.out.println(this.left + this.right);
	}

	public void avg() {
		System.out.println((this.left + this.right) / 2);
	}
}

class SubCalculator extends Calculator {
	int left, right;

	public SubCalculator(int left, int right) {
		this.left = left;
		this.right = right;
	}

	public void substract() {
		System.out.println(this.left - this.right);
	}
}

public class init {
	public static void main(String[] args) {
		Calculator c1 = new Calculator(10, 20);
		c1.sum();
		c1.avg();

		Calculator c2 = new Calculator(20, 40);
		c2.sum();
		c2.avg();

		SubCalculator c3 = new SubCalculator(100, 50);
		c3.sum();
		c3.avg();
		c3.substract();
	}
}

