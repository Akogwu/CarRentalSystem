########Maven build stage########
FROM maven:3.8.2-jdk-11

WORKDIR /app
COPY . .
RUN mvn clean

CMD mvn spring-boot:run
