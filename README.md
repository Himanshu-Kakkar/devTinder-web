# DevTinder-web

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

new page to See all my connections
new page to See all my requests

add functionalities in Requests.jsx component 
To accept or reject requsts 

backend -> request/review/status/reqId


## Ep-05 / 19

sending requests -> Interested / ignored button working in Feed
signup new user


## S03 Ep - 01

    - signup on aws
    - Launch instances
    - chmod 400 <secret>.pem
    - cd Downloads
    - ssh -i "DevTinder-secret.pem" ubuntu@ec2-13-60-212-146.eu-north-1.compute.amazonaws.com
    - Install Node version spesific that is used on your project
      
    - Git clone both frontEnd and Backend 
    - Git pull if any changes is there
    - Frontend
        - npm i -> dependencies
        - npm run build // created dist folder or production ready code
        - sudo apt update
        - sudo apt install nginx
        - sudo systemctl start nginx
        - sudo systemctl enable nginx
        - sudo scp -r dist/* /var/www/html/ // copy code 
        - Enable port :80 of your instance


#### modified the BASE_URL 

updated the code 
git pull 
but but but 
dist folder
production level folderr does not have any change 
so again 
npm run build
sudo scp -r dist/* /var/www/html/ // copy code 

## Daisy UI
    - a readymade tailwind components



# Razorpay Payment Gateway Inegration
    - Sign up on Razorpay & complete KYC 
    - Cerated a UI for premium page
    - Creating an API for create order in backend
    - added my key and secret in env file
    - Intialized Razorpay in utils
    - creating order on Razorpay
    - create Schema and model
    - saved the order in payments collection
    - make the API dynamic
    - Setup RRazorpay webhook on your live APi
    - Ref - https://github.com/razorpay/razorpay-node/tree/master/documents
    - Ref - https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/#integrate-with-razorpay-payment-gateway
    - Ref - https://razorpay.com/docs/webhooks/validate-test/
    - Ref - https://razorpay.com/docs/webhooks/payloads/payments/



# real time chat using webSocket(socket.io)

#### Web Socket is topic

 - Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

#### low-latency: 
    fast, seemless, smooth
#### Bi-directional
    APIs are uni directional, client request something then only server sends
    in WebSocket client and server both can send something to each other simultaneously

 -  Build th UI for a chat window on /chat/:targetUserId
 - setup socket.io in backend
 - npm i socket.io for backend
 - npm i socket.io-client for frontend
 
