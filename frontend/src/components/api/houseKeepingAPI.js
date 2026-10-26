import axios from "axios";

const API_URL = "http://localhost:3000/api/staff/housekeeping/requests";

export const fetchHousekeepingTasks = async (staffId) => {
  const { data } = await axios.get(`${API_URL}/${staffId}`);
  return data.data;
};

export const updateTaskStatus = async (requestId, status) => {
  const { data } = await axios.patch(`${API_URL}/${requestId}/status`, {
    status,
  });
  return data.data;
};
