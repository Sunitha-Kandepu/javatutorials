import java.io.ObjectInputStream.GetField;
import java.util.ArrayList;

public class Test {
	public static void main(String[] args) {
		Mammal m1 = new Human();
		Human h1 = new Human();
		Dog d1 = new Dog();
		Human2 h2 = new Human2();

		m1.sound("HI");
		d1.sound("Bark!!");
		
		ArrayList<Mammal> l1 = new ArrayList<Mammal>();
		l1.add(m1);
		l1.add(h1);
		l1.add(d1);
		
		h1.sound("Hello~");
		h2.sound("TEST!!!!!!!!");
	}
}
