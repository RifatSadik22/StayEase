import axios from "axios";

export const orderFoodAPI = async (order) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/service-requests",
    order
  );
  return data;
};
