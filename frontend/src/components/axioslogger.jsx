import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create();

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request Sent:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
      params: config.params,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Received:', {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Response Error:', {
        url: error.config.url,
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.error('Request Failed:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
