// src/routes/AppRoutes.tsx (Updated)
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/signup/SignupPage'; 
import HomePage  from '../pages/home/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;