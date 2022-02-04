## The Car Rental System.

This CAR rental SE final project. 

_This is a mono-repo containing both the frontend module and backend module for the system._

### Technologies used.

- The application is built using [React.js](https://reactjs.org/) for the frontend
  and [Java (Spring boot)](https://spring.io/projects/spring-boot) in the backend.
- It is running on the [MysSQL DB](https://www.mysql.com/).
- Images for both the frontend and backend can be created using [docker](https://www.docker.com/) files for both the
  frontend and backend.

### Prerequisites.

- Environments and/or programming language prerequisites.
    - JavaScript: [Node.js](https://nodejs.org/en/) preferably download _v10_ ([download link](https://nodejs.org/en/))
    - Java JDK: [JDK](https://www.oracle.com/java/technologies/downloads/) preferably download _jdk
      16_ ([download link](https://www.oracle.com/java/technologies/downloads/))
- Editors or IDEs
    - **JAVA Spring IDEs/editors:**
    - _Preferably_: [Intellij](https://www.jetbrains.com/idea/download/)
      link ([download link](https://www.jetbrains.com/idea/))
    - _Alternative_: [Eclipse](https://www.eclipse.org/downloads/)
      link ([download link](https://www.eclipse.org/downloads/))
    - **JavaScript IDEs/editors:**
    - _Preferably_: [VSCode](https://code.visualstudio.com/) link ([download link](https://code.visualstudio.com))
    - _Alternative_: [Web Storm](https://www.jetbrains.com/webstorm/download/)
      link ([download link](https://www.jetbrains.com/webstorm/download/))


### Getting started.
- clone the repository this URL [GitHub link](https://github.com/Akogwu/CarRentalSystem.git)

  ##### Frontend.

- navigate / cd into the frontend directory `cd frontend`
- install the frontend dependencies by running the command `npm install` or `yarn`

  ##### Backend.

- navigate / cd into the backend directory `cd backend`
- install backend dependencies by running the command `mvn install`
- alternatively open the backend with your either eclipse or intellij and the dependencies will be installed
  automatically.

### Running the Application.

**Run the application.**

navigate to the in each directory for either the backend or the frontend and follow the instructions below for the
specific directory you in.

- Frontend:
    ````
    run the frontend with one of the following commands depending on your application manager:
  
      NPM
      - npm start
      YARN
      - yarn start
    ````

- Backend:
    ````
    run the backend with intellij IDE.
  
        - Open the backend project with intellij
        - wait for the project (maven) dependencies to be installed / resolved.
        - click on the green play button in the top right corner on the IDE to start the backend.
  
    run the backend in terminal:
  
        - mvn spring-boot:run
  
        Alternatively.
        - java -jar target/app-0.0.1-SNAPSHOT.jar
        - mvn spring-boot:run
    ````

##### IMPORTANT!

#### For more documentation.

- **FRONTEND**: Refer to [Frontend README.md](./frontend/README.md) file for more info about frontend.
- **BACKEND**: Refer to [Backend README.md](./backend/README.md) file for more info about the backend.

#### Screenshots

1. Banner
![Banner](./car-rental-screenshots/main-page.png?raw=true "Banner screenshot")
2. Car fleet
![Car Fleet](./car-rental-screenshots/car-fleet.png?raw=true "Banner screenshot")
3. Registration Form.
![Registration Form](./car-rental-screenshots/registration-form.png?raw=true "Registration Form")
4. Reservation Form.
![Reservation Form](./car-rental-screenshots/reservation-form.png?raw=true "Registration Form")
5. Reservation Dashboard.
![Reservation Dashboard](./car-rental-screenshots/reservations-dashboard.png?raw=true "Reservation Dashboard")
6. Backend structure.
![Backend structure](./car-rental-screenshots/backend-structure.png?raw=true "Backend structure")

---------

#### The team.

| Name              | S-ID   | GitHub                               |
|-------------------|--------|--------------------------------------|
| Fahad Asiimwe     | 613464 | [fahdjamy](https://github.com/fahdjamy)|
