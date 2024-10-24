import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
// import Program from './pages/Program';
import ContactUs from './pages/ContactUs';
import Footer from './Components/Layouts/Footer';

import Guides from './pages/Guides';
import Media from './pages/Media';

import Login from './pages/Login';
import Blogs from './pages/Blogs';
import CreateBlogs from './pages/CreateBlog';
import BlogDetail from './pages/BlogDetail';
import EditBlog from './pages/EditBlog';
import ProgramsPages from './Components/Programs/ProgramsPages';
import OfflineEvents from './pages/OfflineEvents';
import DonateForm from './Components/DonateForm';
import ScrollToTop from './Components/Layouts/ScrollToTop'; 



// import YouTubeEvents from './YouTubeEvents';

import  {AuthProvider}  from './AuthContext';
// testing pull works 

function App() {
  return (
    <AuthProvider>
    <Router>
    <ScrollToTop />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/program" element={<Program />} /> */}
          <Route path="/contact" element={<ContactUs />} />
        
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<CreateBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} /> {/* Add this route */}
          <Route path="/edit/:id" element={<EditBlog />} /> {/* Add this route */}
          <Route path="/media" element={<Media />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/login" element={<Login />} />
          <Route path="/OnlineEvents" element={<ProgramsPages />} />
          <Route path="/OfflineEvents" element={<OfflineEvents />} />
          <Route path="/donate" element={<DonateForm />} />
          

          {/* <Route path="/events" element={<YouTubeEvents />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
