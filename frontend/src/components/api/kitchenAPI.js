import axios from "axios";

const API_URL = "http://localhost:3000/api/staff/kitchen/orders";

export const fetchFoodOrders = async () => {
  const { data } = await axios.get(API_URL);
  return data.data;
};

export const updateOrderStatus = async (orderId, status, assignedTo) => {
  const { data } = await axios.patch(`${API_URL}/${orderId}/status`, {
    status,
    ...(assignedTo && { assignedTo }),
  });
  return data.data;
};
