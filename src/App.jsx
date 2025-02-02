import React, { useContext, useState, useEffect } from 'react';
import { Login } from './components/Auth/Login';
import { EmployeeDash } from './components/Dashboard/EmployeeDash';
import AdminDash from './components/Dashboard/AdminDash';
import { AuthContext } from './context/AuthProvides';

function App() {
  const [user, setUser] = useState(null);
  const [userData] = useContext(AuthContext);
  const [Loginuser, setLoginuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const adminUser = {
    firstName: "Admin",
    email: "admin@example.com",
    role: "admin",
    // Add other admin-specific properties
  };

  useEffect(() => {
    if (userData) {
      const logged = JSON.parse(localStorage.getItem("loggedUser"));
      if (logged) {
        setUser(logged.role);
        setLoginuser(logged.user);
      }
      setLoading(false);
    }
  }, [userData]);

  const LoginHandle = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      setLoginuser(adminUser);
      localStorage.setItem('loggedUser', JSON.stringify({ 
        role: 'admin', 
        user: adminUser 
      }));
      return;
    }

    const employeeUser = userData.find(e => 
      e.email === email && e.password === password
    );
    
    if (employeeUser) {
      setUser('employee');
      setLoginuser(employeeUser);
      localStorage.setItem('loggedUser', JSON.stringify({ 
        role: 'employee', 
        user: employeeUser 
      }));
    } else {
      alert('Invalid Credentials!');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user ? <Login LoginHandle={LoginHandle} /> : null}
      {user === 'admin' && Loginuser ? (
        <AdminDash data={Loginuser} changeUser={setUser} />
      ) : user === 'employee' && Loginuser ? (
        <EmployeeDash data={Loginuser} changeUser={setUser} />
      ) : null}
    </>
  );
}

export default App;