import API from "./api" // your existing axios instance

export const fetchMySessions = () =>
  API.get("/my-sessions")

export const fetchUpcomingSessions = () =>
  API.get("/my-sessions?status=upcoming")

export const fetchCompletedSessions = () =>
  API.get("/my-sessions?status=completed")

export const fetchAllSessions = () =>
  API.get("/sessions")
