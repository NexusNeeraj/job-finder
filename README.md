# 📋 Job Management Admin Interface

A full-stack **MERN application** that allows an admin to create and manage job postings.
Frontend is built with **React, Mantine UI, React Hook Form**, and backend with **Node.js, Express, MongoDB**.

---

## 🚀 Features

### 🔹 Job List Page

* Displays all job postings in card format.
* Search & filter jobs by:

  * Job Title
  * Location
  * Job Type (Full-time, Part-time, Contract, Internship)
  * Salary Range (slider).

### 🔹 Job Create Page

* Form to create new job postings.
* Validation using **React Hook Form**.
* Fields:

  * Job Title
  * Company Name
  * Location
  * Job Type
  * Salary Range
  * Job Description
  * Requirements
  * Responsibilities
  * Application Deadline

### 🔹 UI

* Modern responsive UI built with **Mantine**.
* Pixel-perfect **Navbar + Filters section** matching Figma design.
* Reusable components (`Navbar`, `Filters`, `JobCard`).

---

## 🛠️ Tech Stack

* **Frontend**: React, Mantine, React Hook Form, Axios, Vite
* **Backend**: Node.js, Express.js, MongoDB, Mongoose
* **Styling**: Mantine + Custom CSS
* **API Handling**: Axios (`api.js`)

---

## 📂 Project Structure

```
job-management-app/
│
├── server/
│   ├── src/
│   │   ├── config/          # Database connection
│   │   ├── controllers/     # Business logic
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # Express routes (jobs)
│   │   ├── app.js           # Entry point
│   │   ├── server.js        # Server
│   ├── .env                 # Environment variables
│
├── client/
│   ├── src/
│   │   ├── api/            # API calls
│   │   ├── components/     # Navbar, Filters, JobCard
│   │   ├── pages/          # JobList, JobCreate
│   │   ├── App.jsx         # Routes
│   │   ├── main.jsx        # Entry point
│
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/job-finder.git
cd job-finder
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/jobdb
```

Run backend:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will start at 👉 `http://localhost:5173`
Backend will run at 👉 `http://localhost:3000/api`

---

## 📡 API Endpoints

| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| GET    | `/api/jobs`     | Get all jobs (with filters) |
| GET    | `/api/jobs/:id` | Get single job details      |
| POST   | `/api/jobs`     | Create a new job            |
| PUT    | `/api/jobs/:id` | Update a job                |
| DELETE | `/api/jobs/:id` | Delete a job                |


---

## 📌 Future Enhancements

* Add Authentication (Admin login).
* Draft vs Published job states.
* Pagination for job list.
* Upload company logos.

---

## 👨‍💻 Author

Built by **Neeraj Gupta** 🚀
[GitHub](https://github.com/NexusNeeraj)
