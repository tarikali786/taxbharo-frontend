import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to make a GET request
export const get = async (url, config) => {
  try { 
    const response = await axiosInstance.get(url, config || null);

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    throw handleRequestError(error);
  }
};

// Function to make a POST request
export const post = async (url, data, config) => {
  try {
    const response = await axiosInstance.post(url, data, config || null);
    return response;
  } catch (error) {
    throw handleRequestError(error);
  }
};

// Function to make a PATCH request
export const patch = async (url, data, config) => {
  try {
    const response = await axiosInstance.patch(url, data, config || null);
    return response;
  } catch (error) {
    throw handleRequestError(error);
  }
};

// Function to make a DELETE request
export const remove = async (url, config) => {
  try {
    const response = await axiosInstance.delete(url, config || null);
    return response.data;
  } catch (error) {
    throw handleRequestError(error);
  }
};

// Handle request error and return consistent error messages
const handleRequestError = (error) => { 
  if (error.response) {
    if (error.response.status === 401) {
      // window.location.href = "/auth/sing-in";
      throw new Error("Unauthorized Access. Invalid Credentials.");
    }
    if (error.response.status === 500) {
      window.location.href = "/error";
      throw new Error("Internal Server Error. Please try again later.");
    }
    // if (error.response.status === 400) {
    //   console.log(error.message);
    //   // window.location.href = "/error";
    //   throw new Error(`Network Error: ${error.error.message}`);
    // }
    throw new Error(`Error: ${error}`);
  } else {
    throw new Error(`Error: ${error.message}`);
  }
};
