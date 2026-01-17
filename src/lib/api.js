import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // Express server
});

export const getDishes = () => API.get("/dishes");
export const getDish = (id) => API.get(`/dishes/${id}`);
export const addDish = (dish) => API.post("/dishes", dish);
export const deleteDish = (id) => API.delete(`/manageDishes/${id}`);
export const updateDish = (id, data) => API.put(`/manageDishes/${id}`, data);
export const getLatestDishes = () => API.get("/latestDishes");
