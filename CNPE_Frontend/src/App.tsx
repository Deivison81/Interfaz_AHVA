import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { AccountBlocked } from './components/Login/AccountBlocked';
import { Welcome } from './components/Login/Welcome';
import { Dashboard } from './components/Dashboard/Dashboard';

export const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'login' | 'blocked' | 'dashboard'>('home');
  const isLoggedIn = view === 'dashboard';
  const isDashboard = view === 'dashboard';

  const pageStyle = isDashboard
    ? {
        backgroundColor: '#F1F2F4',
        backgroundImage:
          'radial-gradient(circle at 8% 82%, rgba(190,194,199,0.28) 0 12%, transparent 12%), radial-gradient(circle at 78% 88%, rgba(190,194,199,0.22) 0 10%, transparent 10%), linear-gradient(to top, rgba(236,238,241,0.95), rgba(239,241,244,0.88))',
        backgroundSize: 'auto',
      }
    : {
        backgroundColor: '#EAECEE',
        backgroundImage: 'linear-gradient(to top, rgba(235,237,240,0.95), rgba(235,237,240,0.85))',
        backgroundSize: 'cover',
      };

  return (
    <div 
      className="d-flex flex-column min-vh-100" 
      style={pageStyle}
    >
      <Header isLoggedIn={isLoggedIn} />

      <div className={`flex-grow-1 d-flex flex-column ${isDashboard ? 'justify-content-start py-0' : 'justify-content-center py-4'}`}>
        {view === 'home' ? (
          <Welcome onNext={() => setView('login')} />
        ) : view === 'login' ? (
          <Login onLogin={() => setView('dashboard')} onBlocked={() => setView('blocked')} />
        ) : view === 'blocked' ? (
          <AccountBlocked onBackToLogin={() => setView('login')} />
        ) : (
          <Dashboard onLogout={() => setView('home')} />
        )}
      </div>

      <Footer isDashboard={isDashboard} />
    </div>
  );
};

export default App;