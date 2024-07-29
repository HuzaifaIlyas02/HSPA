# HSPA - Housing Space and Property Application

HSPA is a full-stack application inspired by Airbnb, designed to facilitate property listings, bookings, and user interactions. This project showcases a modern web development stack with Angular for the frontend and ASP.NET Core 8 for the backend.

## Features

- User Authentication and Authorization
- Property Listings
- Booking System
- User Profiles
- Property Reviews and Ratings
- Responsive Design

## Tech Stack

**Frontend:**

- Angular
- HTML5
- CSS3
- TypeScript

**Backend:**

- ASP.NET Core 8
- Entity Framework Core
- SQL Server

**Other:**

- JWT for Authentication
- Swagger for API Documentation

## Installation

### Prerequisites

- Node.js
- Angular CLI
- .NET 8 SDK
- SQL Server

### Backend Setup

1. Clone the repository:

   ```sh
   git clone git@github.com:HuzaifaIlyas02/HSPA.git
   cd HSPA/WebAPI
   ```

2. Set up the database:

   ```sh
   dotnet ef database update
   ```

3. Run the backend server:
   ```sh
   dotnet run
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```sh
   cd ../Frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the Angular development server:

   ```sh
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

1. Register an account or log in if you already have one.
2. Browse property listings.
3. Book a property for your desired dates.
4. Manage your bookings and profile.
5. Leave reviews and ratings for properties you've stayed at.

## API Documentation

The backend API is documented using Swagger. Once the backend server is running, you can access the API documentation at `http://localhost:5000/swagger`.

### Example Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login as an existing user
- `GET /api/properties` - Retrieve a list of all properties
- `POST /api/bookings` - Create a new booking
- `GET /api/users/{userId}` - Retrieve user profile information

## Contributing

I welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
