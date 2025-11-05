import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './create';
import BlogListDetail from './bloglist-detail';

function App() {
  // const title = 'welcome to my react app';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogListDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
