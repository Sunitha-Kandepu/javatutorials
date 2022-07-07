import java.io.IOException;
import java.io.InputStream;

public class Main {
	public static void main(String[] args) throws IOException {
		InputStream inputstream = System.in;
		int a = inputstream.read();
		System.out.println(a);
	}
}
