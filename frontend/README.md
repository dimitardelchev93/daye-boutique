# Daye Boutique Frontend

This project is a React-based web application for displaying special offers on products. The products are displayed in a list with their images, prices, and tampon information. Users can see whether they have already ordered a product, and the ordered status can be updated using a provided callback function.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install all required dependencies.
3. Rename the `.env.example` file in the root of the project to `.env` to add the following environment variables:

   ```
   REACT_APP_API_URL=http://localhost:3001
   REACT_APP_PRODUCTS_API_URL=https://front-end-technical-test-bvhzjr6b6a-ew.a.run.app
   ```

   You can change the values of these variables to match your desired API endpoints.

4. Run the project using the following command:

   ```
   npm run start
   ```

The application will start and open in your default web browser.

## Features

- Fetches product offers from a backend api and external one.
- Displays the product offers in a responsive grid layout.
- Shows the ordered status of each product for the user.
- Allows updating the ordered status of a product

## Dependencies

- React
- @mui/material
- styled-components
- Axios

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
