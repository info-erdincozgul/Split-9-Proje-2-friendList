# FriendList
## About the Project
This project is a simple web application that includes a user login system and friend list management. The application uses the React Context API to handle user authentication and a custom hook, useLocalStorage, to persist user information in the browser's local storage. The project uses protected routes (PrivateRoute) to ensure that only logged-in users can access certain pages.
## Başlıca Özellikler:
* User Authentication (Context API): User login and logout processes are centrally managed via the AuthContext. This allows for easy access to the user's status (isLoggedIn) across different components of the application.
* Data Persistence (useLocalStorage Custom Hook): User session information (authUserInfo) is stored in localStorage using a custom hook called useLocalStorage. This ensures that the session is preserved even when the page is refreshed or the browser is closed.
* Protected Routes (PrivateRoute): The PrivateRoute component checks the user's login status and redirects them to the /login page if they are not logged in (!isLoggedIn). This prevents unauthorized access.
* API Interaction (axios): Friend list data and new friend additions are handled by sending requests to an external API using the axios library. These API requests include the user's token in the Authorization header.
* Form Management (React Hook Form): The form for adding new friends is managed with the react-hook-form library, which allows for more effective handling of form data and validation.
## Project Structure
src/:
* App.jsx: The main component of the application; it contains all Context providers and the React Router routing logic.
* components/: Contains the React components that make up different parts of the application.
* contexts/: Houses the AuthContext file, which provides the user authentication status.
* hooks/: Contains the custom useLocalStorage hook.
## How to Run
To run this project on your local machine, you need to have Node.js and npm installed.
1. Install Required Packages:
```
Bash
npm install
```
2. Start the Application:
```
Bash
npm run dev
```
3. View in Browser: After running the command, your project will typically open automatically at http://localhost:5173/. To use the application, go to the /login page and log in with the username "workintech" and password "wecandoit".
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You'll learn how to encapsulate repeating logical functions into custom hooks, such as useAuthContext for managing authentication state and useLocalStorage for persisting data in the browser's local storage. This project demonstrates how these custom hooks can simplify component logic and promote reusability.
* You'll learn how to use React Router to manage application navigation and implement Private Routes to protect certain pages from unauthorized access. The PrivateRoute component checks for an authenticated user before rendering the child components, redirecting to the login page if the user is not logged in.
* You'll understand how to perform API requests using the axios library. This project specifically shows how to make a POST request for user login and another POST request to add a new friend. It also demonstrates making a GET request to fetch the friends list, including how to handle authentication tokens in the request headers.
* You'll learn how to manage form state and user input. The project uses the useState hook to handle form data in LoginForm.jsx and the react-hook-form library to manage form state and validation in AddFriend.jsx, showcasing two different approaches to form handling.
* You'll learn how to use the Context API to manage global state, such as authentication status. The AuthContext.jsx file provides a central location for the user's login state and related functions (login, logout), making this information accessible to any component that needs it without having to pass props down manually.