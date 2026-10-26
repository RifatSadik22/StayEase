import axios from "axios";

export const getAISuggestions = async (request) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/ai/room-suggestions",
    request
  );
  return data.data;
};
