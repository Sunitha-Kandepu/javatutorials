package SamePackage;
import OtherPackage.*;

class SameClassChecker {
	public SameClassChecker() {
		System.out.println("\nSame Class Check");
		this._public();
		this._protected();
		this._default();
		this._private();
	}
	
	public void _public() {
		System.out.println("public");
	}

	protected void _protected() {
		System.out.println("protected");
	}

	void _default() {
		System.out.println("default");
	}

	private void _private() {
		System.out.println("private");
	}
}

class SamePackageChecker extends Same {
	Same _same = new Same();

	public SamePackageChecker() {
		System.out.println("\nSame Packege Check\n[extends]");
		this._public();
		this._protected();
		this._default();
//		this._pravite();
		
		System.out.println("[SamePackage]");
		_same._public();
		_same._protected();
		_same._default();
//		_same._private();
	}
}

class OtherPackageChecker extends Other {
	public Other _other = new Other();

	public OtherPackageChecker() {
		System.out.println("\nOther Pakege Check\n[extends]");
		this._public();
		this._protected();
//		this._other._defalut();
//		this._other._private();
		
		System.out.println("[OtherPacakage]");
		_other._public();
	}
	
	
}

public class Checker {
	public static void main(String[] args) {
		SameClassChecker one = new SameClassChecker();
		SamePackageChecker two = new SamePackageChecker();
		OtherPackageChecker three = new OtherPackageChecker();
	}
}
