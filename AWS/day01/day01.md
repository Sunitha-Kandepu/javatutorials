# ���� ������ ����

- aws ec2 ���� ȯ�濡 git, java, mysql, maven, apache2 ��ġ
- aws RDS ����
    - AWS Ŭ���忡�� ������ �����ͺ��̽��� �� ���� ��ġ, � �� Ȯ���� �� �ִ� ����
- aws s3 ����
    - ���� ������ ����ȭ�ϴ� ���̴�.
    - �ŷڼ��� ���� ����.
    - ��뷮�� ���� ����� �ΰ��Ǵ� �ո����� �ý���
    - ���ϰ� ��Ÿ�����ʹ� ��ü�� ����ȴ�.
    - ��ü���� ��Ŷ�̶�� ������ ����� (����, ��ǻ�Ϳ��� ��ü�� ����, ��Ŷ�� �ϵ��ũ�� ����)
    - ���� ���� ��Ŷ�� ��ġ�� �� �ִµ� Ŭ���̾�Ʈ�� ������ ���� ����� ��Ŷ�� ������
- AWS
    - Ŭ���� ��ǻ�� ���� - ���ͳݿ� ����Ǿ� �ִ� �Ŵ��� ��ǻ�� �ڿ��� ����ϴ� ����
    - Region (����)
        - ������ Ư�� �������� [**AWS ������**]�� �����Ѵ�.
        - ���� Ŭ���̾�Ʈ�� �ڽ��� ��ġ�� ���� ����� ������ ����ϸ� ������ ������ �����ϴ�.
        - [CloudPing.info](http://CloudPing.info) - ������κ��� �� ��ġ���� ���� �ҿ� �ð�
    - availability zone (���뿵��)
        - �糭�� ����� ����� ������ ������ ����
        - ���� �ٸ� ������ �ִ� ���뿵������ ���� ���� �ӵ��� ������. (���� ������ �ִ� ���뿵������ ���� ���� �ӵ��� ������.)
- ��Ʈ��ȣ �̽�
    - ���ȱ׷��� HTTP(80), HTTPS(443), SSH(22) �� �ιٿ��� ���� �� �ְ� �����Ǿ� �־���. �׷��� �츮�� 8080���� ������ �õ��ؼ� ���ӿ� �����ߴ�.
    
    ### �ذ���
    
    ec2 ���� ȯ�濡�� ��Ʈ��ȣ �����̷��� ������ �ߴ�.
    
    ```bash
     sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;
    ```
    
    iptables�� �̿��Ͽ� 80�� ��Ʈ�� ������ 8080�� ��Ʈ�� redirecting �Ѵ�.
    
    ### iptables ���� �����ϱ�
    
    ```bash
    sudo apt install iptables-persistent;
    sudo bash -c "iptables-save > /etc/iptables/rules.v4";
    ```
    
    iptables ������ ��ǻ�Ͱ� ����õǾ��� �� ������� �ȴ�.iptalbes-persistent�� ��ġ�� ���ְ� ������ ���� ������ �ϸ� ������� �Ͽ��� iptables ������ ������ �� �ִ�.