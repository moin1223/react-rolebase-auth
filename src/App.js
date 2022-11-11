 import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'
import Editor from './components/Editor'
import Admin from './components/Admin'
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Unauthorized from './components/Unauthorized';

function App() {
  const ROLES = {
    'User':1,
    'Editor': 1984,
    'Admin': 5150
  }
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="unauthorized" element={<Unauthorized />} />
  

      {/* we want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/user" element={<User />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
        <Route path="editor" element={<Editor />} />
      </Route>


      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="admin" element={<Admin />} />
      </Route>

    </Route>
  </Routes>
  );
}

export default App;
