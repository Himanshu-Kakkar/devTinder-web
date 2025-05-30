# DevTinder

## Ep-01 / 15
- Created a vite + React applications
- remove unnecessary code 
- create a hello world app

## Ep-02 / 16
- Install tailwind css
- Install Daisy UI
- Add NavBar Component to App.jsx
- create components in seprate file
- Install react-router-dom
- Create BrowserRouter > Routes > Route = /Body > RouteChildren
- Create an Outlet in your Body Component
- Create a Footer
- Create a Login Page
- Install Axios
- CORS - install cors in backend => add middleware to with configurations:origin, credentials: true
- Whenever you are making API call so pass axios => { withcredentials: true }
- Install redux toolkit 
    - installed 2 libraries 
    1. react-redux
    2. redux-toolkiit

configureStore => Provider => createSlice => add reducer to store
add redux devTools to chrome extension

Done with /login API
getting user.data properly

NavBar should update as soon as user logs in

create constant utils file and component seprate folder




Body
    NavBar
    Route: / => Feed
    Route: /login => login
    Route: /connections => Connections
    Route: /profile => Profile



## Ep-03 / 17

Refreshing the page... logged me out
still i have token in my browser

user cant access other routes without login
if token is not present redirect user to login page

Logout
Profile page

feature: nomenclature => feat

Get the feed, add the feed into the store
build the user card

Edit profile feature
show Toast on saving profile

## Ep-04 / 18

See all my connections