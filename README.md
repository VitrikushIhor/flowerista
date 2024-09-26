# Flowerista

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/VitrikushIhor/flowerista/blob/main/LICENSE)

## Description

**Flowerista** is an e-commerce web application dedicated to the online sale of flowers. It offers a user-friendly platform where customers can browse, select, and purchase flowers and related products. The application is designed to provide a seamless shopping experience with a strong focus on performance, accessibility, and scalability.

Key features of Flowerista include:

- **Intuitive User Interface**: The application is built using React, ensuring a responsive and dynamic user experience. The interface is designed with simplicity in mind, making it easy for users to navigate through various product categories, view detailed product information, and manage their shopping cart.
  
- **Secure Payment Processing**: Integration with PayPal allows users to make secure payments directly within the platform. This ensures that transactions are handled efficiently and securely, providing peace of mind to customers.
  
- **Multilingual Support**: Using i18next, Flowerista offers localization support, allowing the application to be used in multiple languages. This feature makes the platform accessible to a broader audience, catering to users from different linguistic backgrounds.
  
- **High Performance**: The application leverages modern tools like Vite for fast builds and Redux Toolkit for efficient state management. These tools help ensure that the application remains fast and responsive even as it scales.
  
- **Component-Driven Development**: With Storybook, the development of UI components is isolated and well-documented, ensuring consistency across the application. Visual regression testing with Loki further ensures that UI changes do not introduce unexpected issues.

- **Automated Testing and CI**: The project includes a comprehensive testing setup using Jest and React Testing Library, ensuring high code quality. Husky is used to manage Git hooks, automating tasks like linting and testing before commits, thus maintaining code integrity.

- **Scalable Architecture**: The application is designed following the Feature-Sliced Design (FSD) methodology, which promotes a modular and scalable architecture. This ensures that the project can grow and evolve over time without becoming unmanageable.


## Technologies

This project leverages the following technologies and tools:

- **React** — A library for building user interfaces.
- **TypeScript** — A programming language that extends JavaScript with static typing.
- **Vite** — A modern build tool that offers fast setup and development.
- **Redux Toolkit** — A library for managing application state using Redux.
- **RTK Query** — A powerful data-fetching tool that is part of Redux Toolkit.
- **Jest** — A testing framework for JavaScript, ideal for unit tests.
- **React Testing Library** — A library for testing React components.
- **Storybook** — An isolated development environment for building UI components.
- **Loki** — A tool for visual regression testing.
- **i18next** — A library for internationalization and localization.
- **Husky** — A tool for managing Git hooks.
- **Swiper** — A modern slider component for web applications.
- **Feature-Sliced Design (FSD)** — A methodology for frontend architecture in scalable projects.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/VitrikushIhor/flowerista.git


Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

To run tests:

```bash
npm run test
```

To start Storybook:

```bash
npm run storybook
```

Third-Party Services
PayPal — Integrated for handling online payments.
Localization
The project supports multiple languages using i18next. You can add or modify language files in the corresponding directory.

Contributing
Please feel free to create a Pull Request or open an Issue if you have any suggestions or find any bugs.

License
This project is licensed under the MIT License.
```
