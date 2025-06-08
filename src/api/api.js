// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 */
api.interceptors.request.use(
  (config) => {
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    // Optional: Add auth token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 */
api.interceptors.response.use(
  (response) => response.data ?? {},
  (error) => {
    const { response } = error;

    if (response) {
      const { status } = response;

      if (status === 401 && typeof window !== 'undefined') {
        window.location.href = '/login';
        return Promise.reject(new Error('Unauthorized. Redirecting to login.'));
      }

      // Optional: Handle other errors
    }

    return Promise.reject(error);
  }
);

export default api;
