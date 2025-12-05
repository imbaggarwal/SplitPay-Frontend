# SplitPay - Frontend Dashboard

![Angular](https://img.shields.io/badge/Angular-21-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Bootstrap](https://img.shields.io/badge/Status-Development-yellow)

The official web interface for the **SplitPay Distributed System**. This application serves as an **Aggregator**, consuming data from multiple microservices (User Service & Expense Service) to provide a unified user experience.

## 🏗 Architecture
This frontend implements the **Client-Side Aggregation** pattern.
* **User Data:** Fetched from `User Service` (Port 8080).
* **Wallet Data:** Fetched from `Expense Service` (Port 8081).
* **Communication:** REST API via Angular `HttpClient`.

## 🚀 Key Features
* **User Management:** Create users via a reactive form (Triggers Kafka events in backend).
* **Real-time Lookup:** Fetch user details by ID.
* **Cross-Service Data:** Automatically fetches and displays Wallet Balance from a separate microservice upon user lookup.

## 🛠 Tech Stack
* **Framework:** Angular 21 (Standalone Components)
* **Language:** TypeScript
* **State Management:** Local Component State (Signals ready)
* **HTTP:** Angular HttpClient

## 🏃‍♂️ How to Run
1.  **Prerequisites:** Ensure the [SplitPay-Backend](https://github.com/imbaggarwal/SplitPay-Backend) is running locally via Docker.
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Start Server:**
    ```bash
    ng serve
    ```
4.  **Access:**
    Navigate to `http://localhost:4200`.

## 📡 API Integration
This frontend expects the following local backend services:
* `http://localhost:8080` (User Service)
* `http://localhost:8081` (Expense Service)

To fix CORS issues, ensure backend controllers are annotated with `@CrossOrigin(origins = "http://localhost:4200")`.

---
**Author:** Built by Bhavya Aggarwal
