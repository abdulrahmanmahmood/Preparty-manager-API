# 🏢 Property Manager API

<div align="center">

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Passport](https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white)

**A Production-Ready RESTful API built with NestJS, TypeORM, and PostgreSQL**

[Features](#-features) • [Architecture](#-architecture) • [Installation](#-installation) • [API Documentation](#-api-documentation) • [Security](#-security)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technical Highlights](#-technical-highlights)
- [Project Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [API Documentation](#-api-documentation)
- [Authentication & Authorization](#-authentication--authorization)
- [Database Schema](#-database-schema)
- [Testing](#-testing)
- [Project Structure](#-project-structure)

---

## 🎯 Overview

**Property Manager API** is a robust, scalable, and enterprise-grade backend application designed to demonstrate advanced backend development skills using **NestJS** and **TypeORM**. This project showcases best practices in modern backend architecture, including clean code principles, SOLID design patterns, comprehensive authentication strategies, and production-ready features.

The API provides a complete property management system with advanced user authentication, role-based access control, and comprehensive CRUD operations, making it an excellent portfolio piece for demonstrating backend engineering expertise.

---

## 🚀 Key Features

### 🔐 **Advanced Authentication & Authorization**

- **Multiple Authentication Strategies**:
  - 🔑 **Local Authentication** (Email/Password with bcrypt hashing)
  - 🔄 **JWT Access & Refresh Token** mechanism
  - 🌐 **Google OAuth 2.0** integration
  - 🛡️ **Argon2** hashing for refresh tokens (more secure than bcrypt)

- **Comprehensive Security**:
  - Role-Based Access Control (RBAC) with custom guards
  - Protected routes with `@Public()` decorator
  - Secure password hashing with bcrypt
  - Token refresh mechanism for session management
  - Automatic token validation and expiration handling

### 👥 **Role-Based Access Control (RBAC)**

- **Three-Tier Role System**:
  - 👤 **USER** - Standard user access
  - ✏️ **EDITOR** - Enhanced permissions
  - 👑 **ADMIN** - Full system access

- **Custom Role Guards**:
  - `@Roles()` decorator for route-level authorization
  - Reflector-based metadata handling
  - Flexible permission management

### 🏠 **Property Management System**

- **Complete CRUD Operations**:
  - ✅ Create, Read, Update, Delete properties
  - 📄 Pagination support with customizable limit/offset
  - 🔍 Advanced filtering and search capabilities
  - 📊 Structured API responses with metadata

- **Property Features**:
  - Property types categorization
  - One-to-One relationships with property features
  - Many-to-One relationships with users (owners)
  - Many-to-Many relationships for liked properties
  - Price management and description handling

### 👤 **User Management**

- **User Operations**:
  - User registration and profile management
  - Secure password handling with automatic hashing
  - Avatar URL support
  - User-property relationships
  - Refresh token management

### 🎨 **Clean Architecture & Design Patterns**

- **Modular Structure**:
  - Feature-based module organization
  - Separation of concerns (Controllers, Services, Repositories)
  - Dependency Injection (DI) throughout
  - DTOs for data validation and transformation

- **Code Quality**:
  - TypeScript strict mode
  - Class-validator for DTO validation
  - Class-transformer for object mapping
  - Custom pipes for validation
  - Global validation pipes
  - Comprehensive error handling

### 🛠️ **Advanced Backend Features**

- **Validation & Transformation**:
  - 📝 **class-validator** for DTO validation
  - 🔄 **class-transformer** for object transformation
  - 🎯 **Zod** integration for schema validation
  - Custom validation pipes (ZodValidationPipe, ParseIdPipe)
  - Request header validation
  - Whitelist and forbidNonWhitelisted global validation

- **Database Features**:
  - 🗄️ TypeORM with PostgreSQL
  - Entity relationships (One-to-One, One-to-Many, Many-to-Many)
  - Database migrations support
  - Automatic entity synchronization (dev mode)
  - Repository pattern implementation
  - Factory pattern for data seeding

- **Data Seeding**:
  - 🌱 **Faker.js** integration for realistic test data
  - Custom factories for entities (User, Property, PropertyFeature)
  - Automated seeding scripts
  - Database reset and reseed capabilities

- **Configuration Management**:
  - ⚙️ Environment-based configuration
  - @nestjs/config module integration
  - Separate configs for development and production
  - Type-safe configuration with ConfigType
  - JWT configuration modules

### 📊 **API Response Standards**

- **Standardized Responses**:
  - Generic `ApiResponseDto<T>` for single resources
  - `PaginatedResponseDto<T>` for collections
  - Consistent error handling
  - Metadata inclusion (total, hasNextPage, hasPreviousPage)

### 🧪 **Testing Infrastructure**

- **Testing Setup**:
  - Jest configuration for unit tests
  - E2E testing setup
  - Test coverage reporting
  - Guard testing examples
  - Controller testing examples

---

## 💎 Technical Highlights

### **Enterprise-Grade Features**

✅ **Clean Code Architecture** - Following SOLID principles and clean architecture patterns  
✅ **Dependency Injection** - Full utilization of NestJS's powerful DI system  
✅ **Type Safety** - Comprehensive TypeScript usage with strict mode  
✅ **Security First** - Multiple layers of authentication and authorization  
✅ **Scalable Structure** - Modular design ready for feature expansion  
✅ **Production Ready** - Environment-based configuration and error handling  
✅ **Database Best Practices** - Proper relationships, indexes, and migrations  
✅ **API Design** - RESTful principles with consistent response patterns  
✅ **Validation Layer** - Multiple validation strategies (class-validator, Zod)  
✅ **Documentation** - Well-structured code with clear separation of concerns  

---

## 🏗️ Architecture

This project follows **Clean Architecture** principles with a clear separation of concerns:

```
┌─────────────────────────────────────────────────────┐
│                  Controllers Layer                   │
│         (HTTP Requests & Response Handling)          │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│                  Services Layer                      │
│              (Business Logic)                        │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│              Repository Layer (TypeORM)              │
│            (Data Access & Persistence)               │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────┐
│                 PostgreSQL Database                  │
└─────────────────────────────────────────────────────┘
```

**Cross-Cutting Concerns**:
- 🛡️ **Guards** - Authentication & Authorization
- 🔄 **Interceptors** - Response transformation
- 🚨 **Filters** - Exception handling
- 📝 **Pipes** - Validation & transformation
- 🎨 **Decorators** - Metadata & route enhancement

---

## 🛠️ Tech Stack

### **Core Framework**
- **NestJS** 10.x - Progressive Node.js framework
- **TypeScript** - Strongly typed programming language
- **Node.js** - JavaScript runtime

### **Database & ORM**
- **PostgreSQL** - Relational database
- **TypeORM** 0.3.x - ORM for TypeScript and JavaScript
- **typeorm-extension** - Extended TypeORM utilities

### **Authentication & Security**
- **Passport** - Authentication middleware
- **passport-local** - Local authentication strategy
- **passport-jwt** - JWT authentication strategy
- **passport-google-oauth20** - Google OAuth 2.0 strategy
- **@nestjs/jwt** - JWT utilities
- **bcrypt** - Password hashing
- **argon2** - Secure hashing for refresh tokens

### **Validation & Transformation**
- **class-validator** - Decorator-based validation
- **class-transformer** - Object transformation
- **Zod** - TypeScript-first schema validation
- **Joi** - Schema validation

### **Development Tools**
- **@faker-js/faker** - Generate fake data for testing
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🚦 Getting Started

### **Prerequisites**

```bash
Node.js >= 18.x
PostgreSQL >= 14.x
npm >= 9.x
```

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/abdulrahmanmahmood/Preparty-manager-API.git
cd Preparty-manager-API
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file in the root directory
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=property_manager

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=1h
REFRESH_JWT_SECRET=your_refresh_token_secret
REFRESH_JWT_EXPIRES_IN=7d

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

4. **Set up the database**
```bash
# Create a PostgreSQL database
createdb property_manager

# Run database synchronization (development)
npm run start:dev
```

5. **Seed the database (optional)**
```bash
npm run seed
```

### **Running the Application**

```bash
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

The API will be available at `http://localhost:3000`

---

## ⚙️ Configuration

### **Database Configuration**

The application uses environment-specific database configurations:

- **Development**: `src/config/db.config.ts`
- **Production**: `src/config/db.config.production.ts`

### **JWT Configuration**

- **Access Token**: `src/auth/config/jwt.config.ts`
- **Refresh Token**: `src/auth/config/refresh-jwt.config.ts`

### **OAuth Configuration**

- **Google OAuth**: `src/config/google-oauth.config.ts`

---

## 📚 API Documentation

### **Authentication Endpoints**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | Register new user | No |
| POST | `/auth/login` | Login with email/password | No |
| POST | `/auth/refresh` | Refresh access token | Yes (Refresh) |
| POST | `/auth/logout` | Logout user | Yes |
| GET | `/auth/google` | Initiate Google OAuth | No |
| GET | `/auth/google/callback` | Google OAuth callback | No |

### **User Endpoints**

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| GET | `/users` | Get all users | Yes | ADMIN |
| GET | `/users/:id` | Get user by ID | Yes | Any |
| PATCH | `/users/:id` | Update user | Yes | Owner/ADMIN |
| DELETE | `/users/:id` | Delete user | Yes | ADMIN |

### **Property Endpoints**

| Method | Endpoint | Description | Auth Required | Roles |
|--------|----------|-------------|---------------|-------|
| GET | `/properties` | Get all properties (paginated) | No | - |
| GET | `/properties/:id` | Get property by ID | No | - |
| POST | `/properties` | Create new property | Yes | EDITOR/ADMIN |
| PATCH | `/properties/:id` | Update property | Yes | Owner/ADMIN |
| DELETE | `/properties/:id` | Delete property | Yes | Owner/ADMIN |

### **Request Examples**

#### **Register User**
```bash
POST /auth/signup
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "SecurePass123!",
  "avatarUrl": "https://example.com/avatar.jpg"
}
```

#### **Login**
```bash
POST /auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "id": 1,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### **Create Property**
```bash
POST /properties
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "name": "Luxury Villa",
  "description": "Beautiful villa with ocean view",
  "price": 500000
}
```

**Response:**
```json
{
  "message": "Property created successfully",
  "data": {
    "id": 1,
    "name": "Luxury Villa",
    "description": "Beautiful villa with ocean view",
    "price": 500000
  }
}
```

#### **Get Properties (Paginated)**
```bash
GET /properties?skip=0&limit=10
```

**Response:**
```json
{
  "message": "Properties retrieved successfully",
  "data": [...],
  "total": 50,
  "hasNextPage": true,
  "hasPreviousPage": false
}
```

---

## 🔐 Authentication & Authorization

### **Authentication Flow**

1. **Registration/Login**
   - User registers or logs in with credentials
   - Server validates credentials
   - Server generates access token (short-lived) and refresh token (long-lived)
   - Refresh token is hashed with Argon2 and stored in database

2. **API Access**
   - Client includes access token in Authorization header
   - JWT Guard validates token
   - Request proceeds if valid

3. **Token Refresh**
   - When access token expires, client uses refresh token
   - Server validates refresh token against hashed version
   - New access and refresh tokens are generated

4. **Logout**
   - Refresh token hash is removed from database
   - Client discards tokens

### **Authorization Guards**

```typescript
// JWT Authentication Guard
@UseGuards(JwtAuthGuard)
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}

// Role-Based Authorization
@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Delete(':id')
deleteUser(@Param('id') id: string) {
  return this.userService.remove(+id);
}

// Public Route (bypass authentication)
@Public()
@Get('public-data')
getPublicData() {
  return this.service.getPublicData();
}
```

### **Security Best Practices Implemented**

✅ Password hashing with bcrypt (10 rounds)  
✅ Refresh token hashing with Argon2  
✅ JWT with expiration times  
✅ HTTP-only cookies for tokens (can be configured)  
✅ Role-based access control  
✅ Input validation and sanitization  
✅ SQL injection prevention (TypeORM parameterization)  
✅ Rate limiting (can be added)  
✅ CORS configuration  

---

## 🗄️ Database Schema

### **Entity Relationship Diagram (ERD)**

The database schema is designed with proper normalization and follows relational database best practices. Below is the comprehensive entity relationship structure:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          DATABASE ARCHITECTURE                               │
└─────────────────────────────────────────────────────────────────────────────┘

                                    ┌──────────────┐
                                    │     User     │
                                    ├──────────────┤
                                    │ id (PK)      │
                                    │ firstName    │
                                    │ lastName     │
                                    │ email        │
                                    │ avatarUrl    │
                                    │ password     │
                                    │ role         │
                                    │ refreshToken │
                                    │ createdAt    │
                                    └──────┬───────┘
                                           │
                                           │ 1:N (Owner)
                                           │
                    ┌──────────────────────┴───────────────┐
                    │                                       │
                    │                                       │
            ┌───────▼────────┐                    ┌────────▼─────────┐
            │  Subscriptions │                    │    Contract      │
            ├────────────────┤                    ├──────────────────┤
            │ userId (FK)    │                    │ id (PK)          │
            │ paymentId      │                    │ propertyId (FK)  │
            │ createdAt      │                    │ name             │
            │ updatedAt      │                    │ phone            │
            │ planId         │                    │ email            │
            │ id (PK)        │                    └──────────────────┘
            └────────────────┘
                    
                    
            ┌────────────────────────────────────────────────┐
            │                   Property                     │
            ├────────────────────────────────────────────────┤
            │ id (PK)                                        │
            │ typeId (FK) ──────────────────┐               │
            │ name                           │               │
            │ description                    │               │
            │ price                          │               │
            │ statusId                       │               │
            │ userId (FK) ───────────────────┼───────────┐   │
            └─────────┬──────────────────────┘           │   │
                      │ 1:1                              │   │
                      │                                  │   │
            ┌─────────▼──────────────┐          ┌────────▼───▼────────┐
            │   PropertyFeature      │          │     PropertyType     │
            ├────────────────────────┤          ├──────────────────────┤
            │ id (PK)                │          │ id (PK)              │
            │ propertyId (FK)        │          │ value                │
            │ bedrooms               │          └──────────────────────┘
            │ bathrooms              │
            │ parkingSpots           │          ┌──────────────────────┐
            │ area                   │          │    PropertyImage     │
            │ hasSwimmingPool        │          ├──────────────────────┤
            │ hasBalcony             │          │ id (PK)              │
            │ hasGardenYard          │          │ url                  │
            └────────────────────────┘          │ propertyId (FK)      │
                                                └──────────────────────┘

            ┌────────────────────────────────────────────────┐
            │              Entity (Generic)                  │
            ├────────────────────────────────────────────────┤
            │ id (PK)                                        │
            │ value                                          │
            └────────────────────────────────────────────────┘
```

### **Detailed Entity Specifications**

#### **👤 User Entity**
Primary entity for user management and authentication.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique user identifier |
| `firstName` | String | NOT NULL | User's first name |
| `lastName` | String | NOT NULL | User's last name |
| `email` | String | UNIQUE, NOT NULL | User's email address |
| `password` | String | NOT NULL | Bcrypt hashed password |
| `avatarUrl` | String | NULLABLE | URL to user's profile picture |
| `role` | Enum | DEFAULT 'USER' | User role (ADMIN, EDITOR, USER) |
| `hashedRefreshToken` | String | NULLABLE | Argon2 hashed refresh token |
| `createdAt` | DateTime | DEFAULT NOW() | Account creation timestamp |

**Relationships:**
- `properties` → One-to-Many with Property (as owner)
- `likedProperties` → Many-to-Many with Property (liked properties)
- `subscriptions` → One-to-Many with Subscriptions
- `contracts` → One-to-Many with Contract

---

#### **🏠 Property Entity**
Core entity for property management.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique property identifier |
| `name` | String | NOT NULL, LENGTH(2-10) | Property name/title |
| `description` | String | NOT NULL | Detailed property description |
| `price` | Integer | DEFAULT 0, POSITIVE | Property price in base currency |
| `statusId` | Integer | FOREIGN KEY | Property listing status |
| `userId` | Integer | FOREIGN KEY → User | Property owner reference |
| `typeId` | Integer | FOREIGN KEY → PropertyType | Property type reference |

**Relationships:**
- `user` → Many-to-One with User (owner)
- `type` → Many-to-One with PropertyType
- `propertyFeature` → One-to-One with PropertyFeature
- `likedBy` → Many-to-Many with User
- `images` → One-to-Many with PropertyImage
- `contracts` → One-to-Many with Contract

**Validations:**
- Name length: 2-10 characters
- Price must be positive integer
- Description required

---

#### **✨ PropertyFeature Entity**
Detailed features and amenities for each property.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique feature record ID |
| `propertyId` | Integer | FOREIGN KEY → Property, UNIQUE | Associated property |
| `bedrooms` | Integer | NOT NULL | Number of bedrooms |
| `bathrooms` | Integer | NOT NULL | Number of bathrooms |
| `parkingSpots` | Integer | NOT NULL | Number of parking spaces |
| `area` | Integer | NOT NULL | Property area in sq ft/m |
| `hasSwimmingPool` | Boolean | DEFAULT FALSE | Swimming pool availability |
| `hasBalcony` | Boolean | DEFAULT FALSE | Balcony availability |
| `hasGardenYard` | Boolean | DEFAULT FALSE | Garden/yard availability |

**Relationships:**
- `property` → One-to-One with Property

---

#### **🏷️ PropertyType Entity**
Categorization of property types (Villa, Apartment, House, etc.).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique type identifier |
| `value` | String | NOT NULL, UNIQUE | Type name (e.g., "Villa", "Apartment") |

**Relationships:**
- `properties` → One-to-Many with Property

---

#### **🖼️ PropertyImage Entity**
Multiple images for property listings.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique image identifier |
| `url` | String | NOT NULL | Image URL or path |
| `propertyId` | Integer | FOREIGN KEY → Property | Associated property |

**Relationships:**
- `property` → Many-to-One with Property

---

#### **💳 Subscriptions Entity**
User subscription and payment management.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique subscription ID |
| `userId` | Integer | FOREIGN KEY → User | Subscriber reference |
| `paymentId` | String | NOT NULL | Payment gateway transaction ID |
| `planId` | Integer | NOT NULL | Subscription plan identifier |
| `createdAt` | DateTime | DEFAULT NOW() | Subscription start date |
| `updatedAt` | DateTime | AUTO_UPDATE | Last update timestamp |

**Relationships:**
- `user` → Many-to-One with User

---

#### **📄 Contract Entity**
Property rental/purchase contract management.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique contract identifier |
| `propertyId` | Integer | FOREIGN KEY → Property | Associated property |
| `name` | String | NOT NULL | Contract holder name |
| `phone` | String | NOT NULL | Contact phone number |
| `email` | String | NOT NULL | Contact email address |

**Relationships:**
- `property` → Many-to-One with Property

---

#### **🏗️ Entity (Generic)**
Generic entity for flexible data storage.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | Integer | PRIMARY KEY, AUTO_INCREMENT | Unique identifier |
| `value` | String | NOT NULL | Generic value storage |

---

### **Database Relationships Summary**

| Relationship Type | From Entity | To Entity | Description |
|-------------------|-------------|-----------|-------------|
| **One-to-Many** | User | Property | User owns multiple properties |
| **One-to-Many** | User | Subscriptions | User has multiple subscriptions |
| **One-to-Many** | PropertyType | Property | Type categorizes properties |
| **One-to-Many** | Property | PropertyImage | Property has multiple images |
| **One-to-One** | Property | PropertyFeature | Property has one feature set |
| **Many-to-Many** | User | Property | Users can like multiple properties |
| **Many-to-One** | Contract | Property | Multiple contracts per property |

### **Database Features & Optimizations**

✅ **Normalized Schema** - Third Normal Form (3NF) compliance  
✅ **Indexed Foreign Keys** - Fast join operations  
✅ **Cascade Operations** - Automatic referential integrity  
✅ **Enum Types** - Type-safe role management  
✅ **Timestamp Tracking** - Automatic created/updated timestamps  
✅ **Unique Constraints** - Data integrity enforcement  
✅ **Default Values** - Consistent data initialization  
✅ **Transaction Support** - ACID compliance  

---



## 📁 Project Structure

```
src/
├── auth/                          # Authentication module
│   ├── config/                    # JWT configurations
│   ├── decorators/                # Custom decorators (@Public, @Roles)
│   ├── enums/                     # Role enums
│   ├── guards/                    # Authentication guards
│   │   ├── google-auth/           # Google OAuth guard
│   │   ├── jwt-auth/              # JWT authentication guard
│   │   ├── local-auth/            # Local strategy guard
│   │   ├── refresh-auth/          # Refresh token guard
│   │   └── roles/                 # RBAC guard
│   ├── strategies/                # Passport strategies
│   ├── types/                     # TypeScript types/interfaces
│   ├── auth.controller.ts         # Auth endpoints
│   ├── auth.service.ts            # Auth business logic
│   └── auth.module.ts             # Auth module definition
│
├── common/                        # Shared resources
│   └── dto/                       # Common DTOs
│       ├── api-response.dto.ts    # Standard API response
│       └── paginated-response.dto.ts # Pagination response
│
├── config/                        # Application configuration
│   ├── db.config.ts               # Database config (dev)
│   ├── db.config.production.ts    # Database config (prod)
│   └── google-oauth.config.ts     # OAuth configuration
│
├── entities/                      # TypeORM entities
│   ├── user.entity.ts             # User entity
│   ├── property.entity.ts         # Property entity
│   ├── propertyFeature.entity.ts  # Property features entity
│   └── propertyType.entity.ts     # Property types entity
│
├── property/                      # Property module
│   ├── dto/                       # Data Transfer Objects
│   │   ├── createProperty.dto.ts  # Create property DTO
│   │   ├── createPropertyZod.dto.ts # Zod validation DTO
│   │   ├── updateProperty.dto.ts  # Update property DTO
│   │   ├── pagination.dto.ts      # Pagination DTO
│   │   ├── headers.dto.ts         # Headers validation
│   │   └── idParam.dto.ts         # ID parameter DTO
│   ├── pipes/                     # Custom pipes
│   │   ├── parseIdPipe.ts         # ID parsing pipe
│   │   ├── request-header.ts      # Header validation pipe
│   │   └── zodValidationPipe.ts   # Zod validation pipe
│   ├── property.controller.ts     # Property endpoints
│   ├── property.service.ts        # Property business logic
│   └── property.module.ts         # Property module definition
│
├── user/                          # User module
│   ├── dto/                       # User DTOs
│   │   ├── create-user.dto.ts     # Create user DTO
│   │   └── update-user.dto.ts     # Update user DTO
│   ├── user.controller.ts         # User endpoints
│   ├── user.service.ts            # User business logic
│   └── user.module.ts             # User module definition
│
├── seeding/                       # Database seeding
│   ├── main.seeder.ts             # Main seeder
│   ├── property.factory.ts        # Property factory
│   ├── propertyFeature.factory.ts # Property feature factory
│   ├── user.factory.ts            # User factory
│   └── seed.ts                    # Seed script
│
├── app.controller.ts              # Root controller
├── app.service.ts                 # Root service
├── app.module.ts                  # Root module
└── main.ts                        # Application entry point

test/                              # E2E tests
├── app.e2e-spec.ts
└── jest-e2e.json

```

---

## 🎓 Learning Outcomes & Skills Demonstrated

This project demonstrates proficiency in:

### **Backend Development**
- ✅ RESTful API design and implementation
- ✅ Microservices architecture principles
- ✅ Clean code and SOLID principles
- ✅ Design patterns (Repository, Factory, Singleton)
- ✅ Dependency injection and inversion of control

### **Authentication & Security**
- ✅ JWT-based authentication
- ✅ OAuth 2.0 integration
- ✅ Password hashing and security
- ✅ Role-based access control
- ✅ Security best practices

### **Database Management**
- ✅ ORM usage and best practices
- ✅ Database design and relationships
- ✅ Query optimization
- ✅ Migrations and seeding
- ✅ Transaction management

### **TypeScript & NestJS**
- ✅ Advanced TypeScript features
- ✅ Decorators and metadata
- ✅ Guards, interceptors, and pipes
- ✅ Module architecture
- ✅ Testing strategies

### **Software Engineering**
- ✅ Version control (Git)
- ✅ Code documentation
- ✅ Error handling
- ✅ Logging and monitoring
- ✅ Configuration management

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---


## 👤 Author

**Abdulrahman Mahmood**

- GitHub: [@abdulrahmanmahmood](https://github.com/abdulrahmanmahmood)
- Project: [Preparty-manager-API](https://github.com/abdulrahmanmahmood/Preparty-manager-API)

---

## 📞 Contact & Support

For questions, issues, or suggestions:

- 📧 Email: abdulrahmanmahmoudhos@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/abdulrahman-mahmoud-elsobky/
- 🐛 Issues: [GitHub Issues](https://github.com/abdulrahmanmahmood/Preparty-manager-API/issues)

---

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - The progressive Node.js framework
- [TypeORM](https://typeorm.io/) - Amazing ORM for TypeScript
- [PostgreSQL](https://www.postgresql.org/) - The world's most advanced open source database
- [Passport](http://www.passportjs.org/) - Simple, unobtrusive authentication for Node.js

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star! ⭐**

Made with ❤️ and TypeScript

</div>
