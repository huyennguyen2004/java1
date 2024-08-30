import React from'react';
import './App.css';
import Layout from './components/shared/Layout';
import AllProduct from './pages/AllProducts';
function App() {
  return (
   <Layout>
     <h1>Welcome to my React App</h1>
   <AllProduct></AllProduct> 
   </Layout>
  );
}
export default App;
