public class Human implements Mammal {
	private String food;
	private int	hour;
	private String sound;
	
	public String getFood() {
		return food;
	}
	public void setFood(String food) {
		this.food = food;
	}

	public int getHour() {
		return hour;
	}
	public void setHour(int hour) {
		this.hour = hour;
	}
	public String getSound() {
		return sound;
	}
	public void setSound(String sound) {
		this.sound = sound;
	}

	@Override
	public void eat(String food) {
		this.food = food;
		System.out.println("eat: "+this.food);
	}
	@Override
	public void sleep(int hour) {
		this.hour = hour;
		System.out.println("sleep: "+this.hour);
	}
	@Override
	public void sound(String sound) {
		this.sound = sound;
		System.out.println(this.sound);
	}
	@Override
	public String birth() {
		return "애기";
	}
}

class Human2 extends Human {
	public void test1() {
		System.out.println("1");
	}

	@Override
	public void sound(String sound) {
		System.out.println("22222"+sound);
	}
}
