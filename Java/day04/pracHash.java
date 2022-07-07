import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;

public class pracHash {
	public static void main(String[] args) {
		HashMap map0 = new HashMap();
		
		HashMap<String, String> map1 = new HashMap<String, String>();
		
		HashMap<String, String> map2 = new HashMap<>();
		
		HashMap<String, String> map3 = new HashMap<>(map1);
		
		HashMap<String, String> map4 = new HashMap<>(10);
		
		HashMap<String, String> map5 = new HashMap<>(10, 0.7f);
		
		HashMap<String, String> map6 = new HashMap<String, String>() {{
			put("a", "b");
		}};

		HashMap<Integer, String> map7 = new HashMap<>();
		map7.put(1, "사과");
		map7.put(2, "바나나");
		map7.put(3, "포도");
		System.out.println(map7);
		System.out.println();

		for (Entry<Integer, String>entry: map7.entrySet()) {
			System.out.println("[Key]: " + entry.getKey() + "[Value]: " + entry.getValue());
		}
		System.out.println();

		for (Integer i: map7.keySet()) {
			System.out.println("[Key]: " + i + "[Value]: " + map7.get(i));
		}
		System.out.println();

		Iterator<Integer> keys = map7.keySet().iterator();
		while (keys.hasNext()) {
			int key = keys.next();
			System.out.println("[Key]: " + key + "[Value]: " + map7.get(key));
		}
		System.out.println();

		System.out.println(map7.get(1));
		map7.remove(1);
		System.out.println();

		map7.clear();
		System.out.println(map7);
	}
}
