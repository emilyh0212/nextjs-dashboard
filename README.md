# Next.js Financial Dashboard

This project is a **Financial Dashboard** built with **Next.js**. It provides functionalities for managing financial data, such as invoices, revenue tracking, and user authentication. The dashboard is designed with modern web technologies to offer a seamless and interactive user experience.

## Features

### Authentication
- **Login:** Users can log in with secure credentials (email and password).

### Dashboard
- Displays financial data, including:
  - Total Revenue
  - Latest Invoices
  - Total Customers
  - Pending and Collected Invoices
- **Interactive Search:** Allows users to search invoices dynamically.
- **Pagination:** Enables navigation through multiple pages of data.

### Data Management
- Integration with **Postgres** for data storage.
- Secure password storage using **bcrypt** for hashing.
- Real-time data fetching with optimized SQL queries.

## Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/) (React-based framework)
  - [Tailwind CSS](https://tailwindcss.com/) for styling

- **Backend:**
  - [Postgres](https://www.postgresql.org/) (Database)
  - [NextAuth.js](https://next-auth.js.org/) for authentication

- **Deployment:**
  - [Vercel](https://vercel.com/) for hosting

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn
- Postgres database

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-financial-dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nextjs-financial-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

5. Seed the database (optional):
   Run the `seed.js` file to populate the database with sample data:
   ```bash
   node seed.js
   ```

6. Build and run the development server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to view the application locally.

## Deployment
The application is deployed on **Vercel**. You can view the live site here:
[https://nextjs-dashboard-4e94.vercel.app](https://nextjs-dashboard-4e94.vercel.app)

## Future Enhancements
- **MFA (Multi-Factor Authentication):** Improve security with additional login verification.
- **Filtering Options:** Add advanced filtering to the invoice table for easier data exploration.
- **Dark Mode:** Introduce a dark mode toggle for better accessibility.

## Contributing
Contributions are welcome! If you'd like to improve this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Built as part of a capstone project for learning Next.js.
- Inspired by modern financial dashboard designs.

## Login Credentials
Currently, you can log in using the following credentials:
- **Email:** user@nextmail.com
- **Password:** 123456
