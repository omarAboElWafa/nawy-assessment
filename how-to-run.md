# How to Run

This document provides instructions on how to run the project using Docker containers.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine

## Running the Containers

### Step 1: Clone the Repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Build and Run the Containers

#### Root Directory

1. Navigate to the root directory of the project.
2. Build and run the Docker containers:

```sh
docker-compose up --build
```

#### Frontend

1. Navigate to the `frontend` directory:

```sh
cd frontend
```

2. Build and run the Docker container:

```sh
docker-compose up --build
```

#### Backend

1. Navigate to the `backend` directory:

```sh
cd backend
```

2. Build and run the Docker container:

```sh
docker-compose up --build
```

### Step 3: Access the Application

- Frontend: Open your web browser and go to `http://localhost:<frontend-port>`
- Backend: The backend services will be running on `http://localhost:<backend-port>`

## Stopping the Containers

To stop the running containers, use the following command in each directory:

```sh
docker-compose down
```

## Additional Notes

- Ensure that the ports used in the `docker-compose.yml` files do not conflict with other services running on your machine.
- You may need to adjust environment variables in the `.env` files as per your setup.
