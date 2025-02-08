import React from 'react';
import AppRouter from './router/AppRouter';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <AppRouter />
      
    </ErrorBoundary>
  );
};

export default App;