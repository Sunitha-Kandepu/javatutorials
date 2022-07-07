class Car {
	int left, right;

	public Car(int left, int right) {
		this.left = left;
		this.right = right;
	}

	public void sum() {
		System.out.println(this.left + this.right);
	}

	public int avg() {
		return (this.left + this.right) / 2;
	}
}

class subCar extends Car {
	public subCar(int left, int right) {
		super(left, right);
	}

	public void sum() {
		System.out.println("Overrided result: " + (this.left + this.right));
	}

	public int avg() {
		return super.avg() + 999;
	}

	public void sub() {
		System.out.println(this.left - this.right);
	}
}

public class Overriding {
	public static void main(String[] args) {
		Car c1 = new Car(10, 20);
		subCar c2 = new subCar(100, 200);

		c1.sum();
		c2.sum();
		System.out.println("Overrided result: " + c2.avg());
	}
}
