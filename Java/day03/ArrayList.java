class Car {
	String	name;
	int		speed;
	
	public Car (String name, int speed) {
		this.name = name;
		this.speed = speed;
		System.out.println(this.name);
		System.out.println(this.speed);
	}
}

public class ArrayList {
	public static void main(String[] args) {
		ArrayList		lst = new ArrayList(); // 타입 미설정 Object
		ArrayList<String> sList = new ArrayList<String>();
		// ArrayList<Car>	c1List = new ArrayList<Car>();
		// ArrayList<Car>	c2List = new ArrayList<Car>("A", 1);
		// ArrayList<int>	iList = new ArrayList<int>();
		Car				c1 = new Car("B", 2);
		Car				c2 = new Car("C", 3);
		
	}
}
