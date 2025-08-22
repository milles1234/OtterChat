# OtterChat
OtterChat: A Real-Time Communication Platform
OtterChat represents a comprehensive, full-stack application designed to facilitate secure and seamless real-time communication. This project demonstrates proficiency in modern web development practices and technologies, providing a robust foundation for a scalable messaging service.

🚀 Core Functionalities
The platform is equipped with an array of key features that collectively contribute to its operational efficiency and user experience:

Real-time Communication: Instantaneous, bidirectional data exchange is facilitated through the implementation of Socket.io.

Secure Authentication: The user sign-up and login experience is managed with NextAuth.js, ensuring a secure and reliable authentication flow.

User Presence: The system provides real-time tracking of user online and offline status.

Typing Indicators: Interactive "user is typing..." notifications enhance the fluidity of the conversational interface.

Data Persistence: All messages and user information are securely stored and managed within a PostgreSQL database, accessed via Prisma for enhanced data handling.

User Interface Optimization: The front-end is constructed using Next.js and React, resulting in a responsive, intuitive, and highly efficient user interface.

Connection Resilience: The application incorporates robust logic for automatic re-connection and visual status indicators to maintain stable connectivity despite potential network interruptions.

Efficient Data Retrieval: Older messages are retrieved seamlessly through Intersection Observer, which manages message pagination upon scrolling.

Scalable Architecture: The enhanced database schema has been designed to accommodate future functionalities, including message reactions and attachments.

🛠️ Technical Stack
This project is built upon a modern and integrated technology stack:

Front-End: React, Next.js

Back-End: Node.js, NextAuth.js, Prisma, Socket.io

Database: PostgreSQL

📋 Getting Started
The following steps provide a comprehensive guide for deploying and operating the OtterChat application within a local environment.

Prerequisites
Node.js (v18 or higher)

npm

PostgreSQL database instance

Installation
Clone the repository:

git clone https://github.com/milles1234/OtterChat.git
cd OtterChat

Install dependencies:

npm install

Environment Variables
A .env file must be created in the project's root directory, containing the following variables:

DATABASE_URL="postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="[YOUR_NEXTAUTH_SECRET]"

DATABASE_URL: The connection string for the PostgreSQL database.

NEXTAUTH_SECRET: A unique, randomly generated string used for session management. It can be created using a tool like openssl rand -base64 32.

Database Configuration
Execute the Prisma migration command to establish the database schema:

npx prisma migrate dev --name init

Application Execution
Initiate the development server with the following command:

npm run dev

The application will be accessible at http://localhost:3000.

🤝 Contribution Guidelines
Community contributions are highly valued and are instrumental to the evolution of this project. All contributions are welcome and greatly appreciated.

Fork the repository.

Create a feature branch (git checkout -b feature/NewFeature).

Commit changes (git commit -m 'Add a new feature').

Push to the branch (git push origin feature/NewFeature).

Open a Pull Request for review.

📄 License
The project is distributed under the MIT License. Please refer to the LICENSE file for full details.

🧑‍💻 Author
Deepanshu Yadav

GitHub: github.com/milles1234

LinkedIn: linkedin.com/in/deepanshuyadav100x
