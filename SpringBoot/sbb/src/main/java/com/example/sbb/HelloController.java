package com.example.sbb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // HelloController 클래스가 컨트롤러의 기능을 수행한다는 의미
public class HelloController {
	@RequestMapping("/hello") // URL요청이 발생하면 hello 메소드가 실행됨을 의미 즉 /hello URL과 hello 메소드를 매핑하는 역할
	@ResponseBody // hello 메소드의 응답결과가 문자열 그 자체임을 나타낸다.
	public String hello() {
		return "Hello Spring Boot Board";
	}
}
