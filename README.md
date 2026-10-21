Eggstore
A full-stack e-commerce application built with React, Vite, Spring Boot, and PostgreSQL, featuring product browsing, cart and checkout flows, order management, authentication, and admin tools.
Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Java, Spring Boot, Spring Data JPA
- Database: PostgreSQL
- Security & Payments: JWT, Razorpay
Project Structure
Eggstore/
├── egg-store-frontend/
│   └── egg-store-frontend/
│       └── src/
│           ├── api/          # Shared API client
│           ├── components/   # Reusable UI and layouts
│           ├── context/      # Auth, cart, notifications
│           ├── pages/        # Storefront and admin pages
│           ├── services/     # Feature-based API calls
│           └── utils/        # Helpers
└── egg-store-backend/
    └── egg-store-backend/
        └── src/main/java/com/eggstore/
            ├── controller/   # REST endpoints
            ├── dto/          # Request/response models
            ├── entity/       # Database entities
            ├── repository/   # Data access
            ├── security/     # JWT and access control
            ├── service/      # Business logic
            ├── exception/    # Error handling
            └── util/         # Shared utilities
Run Locally
Backend (requires Java, Maven, and PostgreSQL):
cd egg-store-backend/egg-store-backend
mvn spring-boot:run
Frontend (requires Node.js):
cd egg-store-frontend/egg-store-frontend
npm install
npm run dev
Configure database, JWT, and Razorpay values through environment variables. Never commit real credentials or secrets.
