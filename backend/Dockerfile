########Maven build stage########
FROM maven:3-openjdk-16

WORKDIR /app
COPY . .
RUN mvn clean

CMD mvn spring-boot:run
