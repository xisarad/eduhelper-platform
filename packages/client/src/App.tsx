import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Courses } from './pages/Courses/Courses';
import { CourseDetail } from './pages/CourseDetail/CourseDetail';
import { Homework } from './pages/Homework/Homework';
import { Materials } from './pages/Materials/Materials';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="homework" element={<Homework />} />
          <Route path="materials" element={<Materials />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;