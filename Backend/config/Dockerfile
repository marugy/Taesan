# gredle 이미지 불러오기
FROM gradle:8.2.1-jdk11

# jar 파일을 Docker Container의 WORKDIR 위치로 복사 (이미지 생성할 때 동작)
WORKDIR /config
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} *.jar

# 환경변수 설정
ARG ssh_encrypt_key
ENV ssh-encrypt-key $ssh_encrypt_key

ENTRYPOINT ["sh", "-c", "java -jar build/libs/*.jar"]