# Compass nodeJs challenge with Typescrip

Project developed in the compass challenge

![NodeJS](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png)

## Installation

1. Download all the code
2. Open VS code terminal
3. Execute: npm i
4. Execute: tsc -w
5. Renamed the file ".env.example" to ".env"
6. Open another VS code terminal
7. Run using: npm start
8. Open the postman application and import the postman folder

## Tools used

1. Vs Code: https://code.visualstudio.com/download
2. MongoDb Compass: https://www.mongodb.com/try/download/atlas-kubernetes-operator
3. Postman:https://www.postman.com/downloads/

## Endpoints

All application endpoints

### Tutor

#### /tutor


| Code | Reponse                             |
| ------ | ------------------------------------- |
| 201  | Create a new tutor                  |
| 500  | Returns enexpected error, try again |

CreateTutorController controller code snippet

````
export const createTutorController = async (req: Request, res: Response) => {
  try {
    const corpo = {
      ...req.body,
    };

    res.status(201).send(await tutorService.createTutorService(corpo));
  } catch (error) {
    res.status(500).send(`Erro inesperado, tente novamente ${error}`);
  }
};

````

#### /tutors


| Code | Response                            |
| ------ | ------------------------------------- |
| 200  | Returns a valid tutor               |
| 500  | Returns enexpected error, try again |

#### /tutor/:id


| Code | Reponse                             |
| ------ | ------------------------------------- |
| 200  | Returns success                     |
| 500  | Returns enexpected error, try again |

#### /tutor/:id


| Code | Reponse                                                  |
| ------ | ---------------------------------------------------------- |
| 200  | Returns success                                          |
| 404  | Returns a message stating that it did not find the tutor |
| 500  | Returns enexpected error, try again                      |

### Pet

### /pet/:tutorId


| Code | Reponse                                                                       |
| ------ | ------------------------------------------------------------------------------- |
| 201  | Create a new pet                                                              |
| 404  | Returns a message stating that it did not find the pet for the specific tutor |
| 500  | Returns enexpected error, try again                                           |

### /pet/:petId/tutor/:tutorId


| Code | Reponse                                                                       |
| ------ | ------------------------------------------------------------------------------- |
| 200  | Returns success                                                               |
| 404  | Returns a message stating that it did not find the pet for the specific tutor |
| 500  | Returns enexpected error, try again                                           |

### /pet/:petId/tutor/:tutorId


| Code | Reponse                                                  |
| ------ | ---------------------------------------------------------- |
| 200  | Returns success                                          |
| 404  | Returns a message stating that it did not find the tutor |
| 500  | Returns enexpected error, try again                      |
