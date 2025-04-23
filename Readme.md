# Milestone_1
This is an e-commerce platform that allows users to browse products, add them to their cart, and securely complete purchases.
It supports user authentication, product search, and payment processing. 
The backend handles inventory management and order tracking. 
The frontend provides a responsive and user-friendly shopping experience.
# Milestone_2
 Did the frontended part of login page using tailwind_css.
 Login page contains things like email id, password, remember me, forgot password , submit,signup
# Milestone_3
 created an server
 linked mongo DB with the backend Tech Stack
 Mongo DB, Express JS, Nodemon
 # Milestone_4
 Created User Model
 Used JsonWebToken and bcrypt to encrypt password
 Created multer file
 # Milestone_5
 Created Signup page
 Used TailwindCSS to make it responsive
 # Milestone-6
 Use bcrypt to hash the user's password during signup.
 Save the hashed password in the database instead of plain text.
 Saved all the user's data in the database while ensuring that the password remains encrypted.
 # Milestone-7
 Accept user credentials (email/username and password).
 Retrieve the corresponding user from the database.
 Validate Password:
 Use bcrypt to hash the entered password.
 Compare it with the stored hashed password for authentication.
 # Milestone-8
 Designed a reusable card component with props for product details (e.g., name, image, price).
 Added a grid layout or flexbox for displaying multiple cards neatly.
 # Milestone-9
 Create the form for products
 This form will take multiple product images images as input
 # Milestone-10
 Created product schema
 Created an end point to validate and store product details in mongodb.
 # Milestone_11
 Wrote an endpoint that will send all products data to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component
 # Milestone_12
 Wrote an endpoint that will send data by filtering with my mail and send data from mongodb.
 Receive data at frontend -How to display that data dynamically using product card created earlier.
 # Milestone_13
 Wrote an endpoint that will update the existing data in MongoDB.
 Auto fill the form with previous data and give option to edit.
 # Milestone_14
 Wrote an endpoint that delete the product with specific ID from MongoDB.
 # Milestone_15
 Created new Nav component  with links to all pages:
    Home
    My-products
    Add product
    cart

 # Milestone-16
 Created a new page to display each product.
 Added quantity and add to card button. 
 # Milestone-17
 Edited the user schema to store cart products .
 Wrote an end point to receive the product details and store in database.
 # Milestone-18
 Created an endpoint to receive request from cart page.
 Created an backend endpoint to fetch all the products inside cart with user mail.
 # Milestone-19
 Created a backend endpoint that will send all the user data using mail.
 Created a frontend profile page that will display all the user data (eg.display profile photo, name, mail and addresses)
 # Milestone-20
 Created a backend endpoint that will send all the user data using mail.
 Created a frontend profile page that will display all the user data(displays profile photo, name, mail and addresses.)
 # Milestone-21
 Created an frontend form that will will take address,take country, city, address1, address2, zip code, address type
 # Milestone-22
 Created a backend endpoint that will store the address inside user profile in database.
 # Milestone-23
 Added a button inside cart called "Place order"
 Created a select address page where we will display all the address and ask to select delivery address.
 Wrote mongoose schema for storing orders details.
 # Milestone-24
 Created an order conformation page.
 # Milestone-25
 Created an backend endpoint that will help in placing the order.
 # Milestone-26
 Created an backend endpoint that will help getting all the orders of the user.
 # Milestone-27
 Created a frontend page that will display all the user orders.
 # Milestone-28
 Added cancel button in my-orders and created an backend endpoint for cancel order.
 # Milestone-29
 Added online payment gateway to our application using Paypal api.
 # Milestone-30
 Implemented online payment using PayPal API using the client key we created earlier.
 # Milestone-31
 Implemented redux store to store all global states
 # Milestone-32
 In Login page we used Dispatch method to store the mail inside global state
 In all the remaining pages acc the mail stored in global state using useSelector
 # Milestone-33
 Downloaded jsonwebtoken package using NPM
 Used sign method to create an JWT token with mail and ID
 Gave maxAge to set expire time
 Added the cookie inside the response that helps you to store the cookie inside browser.
 # Milestone-34
 Got the token from the browser cookie and send it to the server
 In backend wrote a middleware function to validate that JWT token