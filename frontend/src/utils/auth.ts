// // src/utils/auth.ts
// const API_BASE_URL = 'http://your-backend-server.com/api';

// export const loginUser = async (credentials) => {
//   const response = await fetch(`${API_BASE_URL}/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials),
//   });

//   if (!response.ok) {
//     throw new Error('Login failed');
//   }

//   const data = await response.json();
//   // Save token to localStorage or state manager
//   localStorage.setItem('authToken', data.token);
//   return data.user;
// };

// // ... and a similar function for signupUser