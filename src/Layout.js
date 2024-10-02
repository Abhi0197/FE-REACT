// src/Layout.js
import React from 'react';
import './Layout.css';  // Add layout-specific styles

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>My React App</h1>
      </header>
      <main className="layout-content">
        {children}  {/* This will render the content of each page */}
      </main>
      <footer className="layout-footer">
        <p>© 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

