import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // backend base url
});

export const fetchJobs = (filters) => API.get("/jobs", { params: filters });
export const fetchJobById = (id) => API.get(`/jobs/${id}`);
export const createJob = (jobData) => API.post("/jobs", jobData);
export const updateJob = (id, jobData) => API.put(`/jobs/${id}`, jobData);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
