# 오늘 공부한 내용

- aws ec2 서버 환경에 git, java, mysql, maven, apache2 설치
- aws RDS 공부
    - AWS 클라우드에서 관계형 데이터베이스를 더 쉽게 설치, 운영 및 확장할 수 있는 서비스
- aws s3 공부
    - 파일 서버를 서비스화하는 것이다.
    - 신뢰성이 아주 높다.
    - 사용량에 따라 요금이 부가되는 합리적인 시스템
    - 파일과 메타데이터는 객체로 저장된다.
    - 객체들은 버킷이라는 공간에 저장됨 (쉽게, 컴퓨터에서 객체는 파일, 버킷은 하드디스크라 생각)
    - 지역 마다 버킷을 설치할 수 있는데 클라이언트의 지역에 가장 가까운 버킷에 접근함
- AWS
    - 클라우드 컴퓨팅 서비스 - 인터넷에 연결되어 있는 거대한 컴퓨터 자원을 사용하는 서비스
    - Region (지역)
        - 전세계 특정 구역마다 [**AWS 인프라**]가 존재한다.
        - 따라서 클라이언트는 자신의 위치와 가장 가까운 인프라를 사용하면 빠르게 엑세스 가능하다.
        - [CloudPing.info](http://CloudPing.info) - 전세계로부터 내 위치까지 핑의 소요 시간
    - availability zone (가용영역)
        - 재난을 대비해 백업과 이전이 가능한 영역
        - 서로 다른 지역에 있는 가용영역들은 서로 전송 속도가 느리다. (같은 지역에 있는 가용영역들은 서로 전송 속도가 빠르다.)
- 포트번호 이슈
    - 보안그룹이 HTTP(80), HTTPS(443), SSH(22) 만 인바운드로 들어올 수 있게 설정되어 있었다. 그러나 우리는 8080으로 들어가려고 시도해서 접속에 실패했다.
    
    ### 해결방법
    
    ec2 서버 환경에서 포트번호 리다이렉션 설정을 했다.
    
    ```bash
     sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;
    ```
    
    iptables를 이용하여 80번 포트의 접속을 8080번 포트로 redirecting 한다.
    
    ### iptables 설정 고정하기
    
    ```bash
    sudo apt install iptables-persistent;
    sudo bash -c "iptables-save > /etc/iptables/rules.v4";
    ```
    
    iptables 설정은 컴퓨터가 재부팅되었을 때 사라지게 된다.iptalbes-persistent를 설치를 해주고 다음과 같은 설정을 하면 재부팅을 하여도 iptables 설정을 유지할 수 있다.
