// src/services/ApiService.js
import axios from 'axios';

const ApiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 */
ApiService.interceptors.request.use(
  (config) => {
    // Automatically set Content-Type only if not set
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    // Optional: You can add auth token here if needed
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
ApiService.interceptors.response.use(
  (response) => response.data ?? {},
  (error) => {
    const { response } = error;

    if (response) {
      const { status } = response;

      // Redirect to login on unauthorized
      if (status === 401) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(new Error('Unauthorized. Redirecting to login.'));
      }

      // Optional: Handle other status codes
      // if (status === 403) { ... }
      // if (status === 500) { ... }
    }

    return Promise.reject(error);
  }
);

export default ApiService;
