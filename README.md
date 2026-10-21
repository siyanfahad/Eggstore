Eggstore
Eggstore is a full-stack e-commerce application for browsing products, managing a shopping cart, checking out, and managing orders. The repository contains a React/Vite frontend and a Spring Boot backend.
Note: This README describes the structure visible in the repository. Exact behavior and setup requirements may depend on the implementation and environment configuration.

Tech Stack
Frontend
- React
- Vite
- Tailwind CSS
- JavaScript
- API calls organized into service modules
Backend
- Java
- Spring Boot
- Spring Data JPA / Hibernate
- PostgreSQL
- JWT-based authentication components
- Razorpay payment integration components

Frontend: What the folders do
Path	Purpose
src/main.jsx	Frontend entry point; mounts the React application.
src/App.jsx	Main application component and route composition.
src/index.css	Global styles and Tailwind CSS entry styles.
src/api/apiClient.js	Shared API client configuration for requests to the backend.
src/components/	Reusable UI and layout components.
src/components/RequireAuth.jsx	Component for guarding routes that require authentication.
src/components/RequireAdmin.jsx	Component for guarding admin-only routes.
src/components/StorefrontLayout.jsx	Shared storefront page layout.
src/components/admin/	Admin-specific layout and UI.
src/components/common/	Shared components such as product images, skeletons, and empty states.
src/components/layout/	Shared navigation, footer, and cart drawer components.
src/components/product/	Product cards and variant selection UI.
src/components/ui/	Reusable basic UI elements such as buttons.
src/context/	React context for authentication, cart state, and toast notifications.
src/pages/	Storefront pages such as home, shop, product details, account, cart, checkout, and orders.
src/pages/admin/	Admin pages for dashboard, products, categories, orders, and admin login.
src/services/	API functions grouped by feature: authentication, products, cart, checkout, orders, addresses, and admin operations.
src/utils/formatCurrency.js	Currency-formatting helper.
package.json	Frontend scripts and dependency definitions.
vite.config.js	Vite development/build configuration.
tailwind.config.js	Tailwind CSS configuration.
postcss.config.js	PostCSS configuration.
.env.example	Example frontend environment variables; use placeholders only.


Frontend service modules
- authApi.js — authentication-related API calls.
- productApi.js — product-related API calls.
- cartApi.js — cart operations.
- checkoutApi.js — checkout-related API calls.
- orderApi.js — order-related API calls.
- addressApi.js — address-related API calls.
- adminApi.js — administrative API calls.
Backend: What the packages do
The Spring Boot source is under egg-store-backend/egg-store-backend/src/main/java/com/eggstore/.
Package / file	Purpose
EggStoreApplication.java	Spring Boot application entry point.
controller/	REST API endpoints. Includes controllers for authentication, products, categories, cart, orders, delivery, and admin operations.
dto/	Data Transfer Objects used for request and response payloads, grouped by feature.
dto/address/	Address request and response objects.
dto/admin/	Admin-facing request and response objects for categories, customers, discounts, products, stock, and variants.
dto/auth/	Login, signup, and authentication response objects.
dto/cart/	Cart item, cart response, and discount request objects.
dto/common/	Shared API error response objects.
dto/order/	Order creation, status, payment verification, and checkout/order response objects.
dto/product/	Product, category, and variant response objects.
entity/	JPA entities representing persisted application data, including users, products, variants, categories, carts, orders, payments, addresses, discounts, and inventory logs.
entity/enums/	Enumerations for roles, order status, payment status, and discount type.
exception/	Application-specific exceptions and global exception handling.
repository/	Spring Data repository interfaces for database access.
security/	JWT utilities, authentication filter, and security configuration.
service/	Business logic for authentication, products, cart, orders, addresses, admin operations, Razorpay, and webhooks.
util/	Shared utility classes, including security-related helpers.
src/main/resources/application.yml	Spring Boot configuration, including datasource, server, JWT, and Razorpay environment-variable settings.
pom.xml	Maven dependencies and build configuration.


Configuration and Secrets
The backend configuration uses environment-variable placeholders for sensitive settings. Configure the values in your local environment or deployment platform rather than committing secrets.

Common backend variables referenced by application.yml:
Variable	Purpose
DB_URL	JDBC URL for PostgreSQL.
DB_USERNAME	Database username.
DB_PASSWORD	Database password.
PORT	Server port; defaults to 8080 in the configuration.
JWT_SECRET	Secret used for JWT signing. Use a strong, randomly generated value of appropriate length.
RAZORPAY_KEY_ID	Razorpay key ID.
RAZORPAY_KEY_SECRET	Server-side Razorpay secret.
RAZORPAY_WEBHOOK_SECRET	Secret used to verify Razorpay webhooks.


The frontend may also require environment variables. Check .env.example and the source code for the exact variable names expected by the frontend.

Security reminders
- Do not commit .env files or real credentials.
- Keep .env.example limited to placeholder values and variable names.
- Do not expose Razorpay secret values or the JWT signing secret in frontend code.
- If a secret was accidentally committed or pushed, rotate it; deleting it from the latest version alone does not remove it from Git history.
Postman Files
The backend folder includes Postman-related YAML files:
- egg-store-backend/.postman/resources.yaml
- egg-store-backend/postman/globals/workspace.globals.yaml
These appear to support Postman resources or workspace globals. Review them before publishing to ensure they contain no tokens, passwords, or private environment values.
Running the Project Locally
The commands below are a starting point. Confirm required environment variables, database setup, and scripts in the project before running.
1. Start the backend
Requirements: a compatible JDK, Maven (or the Maven wrapper if one is added), and PostgreSQL.

From the backend Maven project directory:
cd egg-store-backend/egg-store-backend
mvn spring-boot:run
Set the database and required application environment variables before starting the service. The configured default server port is 8080.
2. Start the frontend
Open a second terminal:
cd egg-store-frontend/egg-store-frontend
npm install
npm run dev
Vite prints the local development URL in the terminal. Ensure the frontend API base URL points to the running backend.
3. Build checks
Frontend production build:
cd egg-store-frontend/egg-store-frontend
npm run build
Backend package build:
cd egg-store-backend/egg-store-backend
mvn package
Notes
- The current repository uses nested frontend and backend directories. Keep the paths above in mind when opening the projects or running commands.
- No API endpoint catalogue, deployment configuration, or test instructions are documented here because they should be verified against the actual implementation.
