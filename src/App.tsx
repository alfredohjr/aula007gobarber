import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import SignIn from './pages/signIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

// import ToastContainer from './components/ToastContainer';
// import { AuthProvider } from './hooks/AuthContext';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
