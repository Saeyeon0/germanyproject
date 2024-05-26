import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <h2>Welcome</h2>
        <p>This is the home page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;