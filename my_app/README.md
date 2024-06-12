# Blog App

This app is built as an exercise in Full Stack Open course. After login, user can add, like and remove blogs.

## How to start development

1. Make sure you have docker, docker compose and nvm installed.

2. Run `docker compose -f docker-compose.dev.yml up` in root folder of the project. The app is then available on http://localhost:8080

3. For better development experience, install dependencies also to your local machine by running `nvm use 20 && npm i` in both frontend and backend folder.

4. Add a user to database using REST Client extension on VS Code. There are example requests available in the folder ./backend/requests. Open create_user.rest, and click 'Send Request'. Then you should be able to login using just created user credentials.

5. When you are finished, you can tear down development environment with command `docker compose -f docker-compose.dev.yml down`

## How to run app in production mode

Run `docker compose up` in project's root folder.

## How to add app users manually

App is currently missing 'create user' feature, so you have to create users manually. Users are created by making POST request to backend /api/users with payload

```
{
  "username": "your_username",
  "name": "Your Name",
  "password": "your_password"
}
```

Check step 4 from 'How to start development' for using REST Client extension for this.
