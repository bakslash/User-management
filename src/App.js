// src/App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AppRoutes from './routes';




function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes/>
      </Router>
    </AuthProvider>
  );
}

export default App;
