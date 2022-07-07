import java.util.ArrayList;
import java.util.Iterator;

class Car {
	String name;
	int speed;

	public Car (String name, int speed) {
		this.name = name;
		this.speed = speed;
	}

	public void printCar() {
		System.out.println("method called");
		System.out.println("[name: " + this.name + "]");
		System.out.println("[speed: " + this.speed + "]");
	}
}

public class pracArrayList {
	public static void main(String[] args) {
		ArrayList<Car> cList = new ArrayList<Car>();
		ArrayList<Integer> iList = new ArrayList<Integer>();
		Car c1 = new Car("A", 0);
		Car c2 = new Car("B", 1);
		Car c3 = new Car("C", 2);

		cList.add(c1);
		cList.add(c2);
		cList.add(c3);
		cList.add(new Car("D", 3));
		System.out.println("[Size: "+ cList.size() +"]");
		for (int i = 0; i < 4; i++) {
			cList.get(i).printCar();
		}
		System.out.println();
		System.out.println();
		System.out.println(cList.contains(c1));

		cList.remove(0);
		System.out.println("[Size: "+ cList.size() +"]");
		for (int i = 0; i < 3; i++) {
			cList.get(i).printCar();
		}
		System.out.println();
		System.out.println();

		cList.clear();
		System.out.println("[Size: "+ cList.size() +"]");
		System.out.println();
		System.out.println();


		for (int i = 0; i < 10; i++) {
			iList.add(i);
		}

		Iterator<Integer> iter = iList.iterator();
		while (iter.hasNext()) {
			System.out.println(iter.next());
		}
	}
}