import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Homepage';
import Layout from './pages/SidePanel';
import Test from './pages/test';

// import 'antd/dist/antd.css';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));