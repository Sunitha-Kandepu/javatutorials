public class Array {
	public static void main(String[] args) {
		int[] odds = {1, 3, 5, 7};
		int[] d = new int[3];
		String[] weeks = {"월", "화", "수", "목", "금", "토", "일"};
		String[] name = new String[3];

		d[0] = 1;

		name[0] = "전";
		name[1] = "증";
		name[2] = "훈";


		int i = 0;
		while (i < 4) {
			System.out.print(odds[i]);
			i++;
		}
		System.out.println();
		for (int num: d) {
			System.out.print(num);
		}
		System.out.println();
		for (i = 0; i < name.length; i++) {
			System.out.print(name[i]);
		}
		System.out.println();
		for (String week: weeks) {
			System.out.print(week);
		}
		System.out.println();
	}
}