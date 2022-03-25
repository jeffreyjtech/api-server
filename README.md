# API Server

An API server utilizing full CRUD, database abstractions, and associations.

[Deployed API](https://jjtech-api-server.herokuapp.com/)

UML DIAGRAM WIP
<!-- ![UML Diagram](./assets/uml-401-lab-3.jpg) -->

## Installation

1. Clone from this repo `git clone https://github.com/jeffreyjtech/api-server.git`
2. cd into `api-server`
3. `npm install`
4. Optionally, create an .env file with variable `PORT` to assign your preferred port number. The default `PORT` is `3000`.

## Usage

After installation, run `npm start`.

## Contributors / Authors

- Jeffrey Jenkins

### Credits

- Used this [Stack Overflow thread](https://stackoverflow.com/questions/50643965/jest-testing-try-catch) to test for unhandled errors with jest.

## Features / Routes

*Work in progress* <!-- -->

Routes for basic use are `/species` and `/magikarp`.

API has full CRUD, so you can `GET`, `POST`, `PUT`, and `DELETE`.

Add id param to route to `GET` one object, `DELETE`, and `PUT`.

- `Species` schema:

```json
{
  "name": "Bulbasaur", // Required
  "dexId": 1, // Required
  "primaryType": "grass", // Required
  "secondaryType": "poison" // Not required
}
```

- `Magikarp` schema:

```json
{
  "name": "Golden boy", // Required
  "shiny": true // Required
}
```
