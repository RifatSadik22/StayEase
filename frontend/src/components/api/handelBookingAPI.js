import axios from "axios";

export const bookRoom = async (booking) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/bookings",
    booking
  );
  return data;
};
