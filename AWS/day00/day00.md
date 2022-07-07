# 오늘 한 일

## AWS

- IAM 계정 생성
- key-pair 발급
    - *.pem
- 인스턴스(EC2) 생성
- 보안 그룹 생성
    - Web은 HTTP, HTTPS 설정
    - 근데 우리는 SSH 까지 설정했음
- AMI 생성
    - EC2를 만드는 틀 (클래스라고 생각)
- 오토-스케일링(ASG) 그룹 생성
    - 자동 조정의 방법
        - CPU를 기준으로 새로운 new EC2 생성
        - 시간을 기준으로 새로운 new EC2 생성

ASG까지 설정 후 로드밸런서는 못 만들었음(서비스가 없어서)

![스크린샷 2022-06-20 오후 4.54.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d646f62c-73a2-40d8-84e2-34d7a07adc1f/스크린샷_2022-06-20_오후_4.54.26.png)

삽질의 흔적

## MySQL

- MySQL 설치
    - PID오류가 발생하는데 프로세스 종료 후 재시작하면 된다.
- MySQL 워크벤치 설치
