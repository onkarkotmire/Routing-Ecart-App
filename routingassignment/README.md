## REACT ROUTING APPLICATION USING ADD TO CART Funcationality


## Components
The application consists of the following components:

## App
The root component of the application. It handles the routing and renders the appropriate components based on the current URL.

## Navbar
Displays the navigation bar at the top of the page. Contains links to the Home, Product, and Add to Cart pages.

## HomePage
The default landing page of the application. It is displayed when the app starts. No specific functionality is implemented in this component.

## ProductPage
Displays a list of product cards fetched from the API. Each card shows the price, category, image, and an add to cart button.

## CartPage
Displays the list of items that have been added to the cart. Each item is displayed in a card format and includes a remove item button.


## API Integration
The application fetches product data from the following API endpoint:

## API Endpoint: http://localhost:5005/data
Method: GET
Response Format: JSON
When the ProductPage component mounts, it makes a request to the API endpoint to retrieve the product data. The fetched data is then used to render the product cards.

## State Management
The application uses React's built-in useState hook to manage the state of the cart items. When the add to cart button is clicked, the corresponding product data is stored in the cart state. Similarly, when the remove item button is clicked, the corresponding item is removed from the cart state.
