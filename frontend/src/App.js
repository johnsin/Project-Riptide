import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <ProtectedRoute 
                path="/dashboard" 
                component={Dashboard} 
                isAuthenticated={isAuthenticated} 
              />
              <ProtectedRoute 
                path="/admin" 
                component={AdminDashboard} 
                isAuthenticated={isAuthenticated} 
                isAdmin={user && user.isAdmin}
              />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;