# Agree-Connect
To design and develop a scalable, modular agricultural platform that connects farmers, landowners, and service providers using NestJS. It will feature real-time communication, microservice-based architecture, robust security, and advanced backend capabilities.


## ✅ Day 1 Progress (April 16, 2025)

### 🔰 Phase 1: Core Setup
- Initialized NestJS project: `agroconnect-backend`
- Configured PostgreSQL using TypeORM
- Created `UserModule` with:
  - `User` entity (`id`, `name`, `email`, `password`, `role`, `created_at`)
  - `UserService` with create, read, delete methods
  - `UserController` with public and protected endpoints
- Enabled `autoLoadEntities` in TypeOrm config
- Enabled schema sync for development (`synchronize: true`)

---

### 🔐 Phase 2: Authentication + Role-Based Access
- Implemented `AuthModule` with:
  - JWT login and registration routes (`/auth/login`, `/auth/register`)
  - Password hashing using `bcrypt`
  - JWT token generation and validation
- Created DTOs:
  - `RegisterDto`
  - `LoginDto`
- Set up Passport's `JwtStrategy` for token validation
- Created and applied `JwtAuthGuard` for protecting routes
- Implemented `@Roles()` custom decorator for RBAC
- Implemented `RolesGuard` to enforce role-based access control
- Created `UserRole` enum (e.g., `admin`, `farmer`, `landowner`) and integrated across app

---

### 🛡️ Phase 2: Security Enhancements
- Added `helmet` for securing HTTP headers
- Added `express-rate-limit` to prevent abuse
- Enabled `CORS` with frontend origin support
- Created custom `LoggerMiddleware` to log request and response durations
- Fixed bug: `req.user` being `undefined` inside guards (by properly returning from `JwtStrategy`)

---

### ✅ Status
> ✅ All authentication, user roles, and security baseline features completed successfully.

---


