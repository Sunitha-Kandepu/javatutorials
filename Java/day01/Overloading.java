class Car {
	int op[];

	public Car(int op[]) {
		this.op = op;
	}

	public void sum() {
		int total = 0;

		for (int value : this.op) {
			total += value;
		}
		System.out.println(total);
	}
}

public class Overloading {
	public static void main(String[] args) {
		Car c1 = new Car(new int[]{1, 2});
		Car c2 = new Car(new int[]{10, 20, 30, 40, 50});

		c1.sum();
		c2.sum();
	}
}

