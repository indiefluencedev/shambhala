import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './Components/Layouts/Footer';

import Books from './pages/Books';
import Gallery from './pages/Gallery';

import Login from './pages/Login';
import Blogs from './Components/Blogs/Blogs';
import CreateBlogs from './Components/Blogs/CreateBlog';
import BlogDetail from './Components/Blogs/BlogDetail';
import EditBlog from './pages/EditBlog';

import OnlineEvents from './pages/OnlineEvents';
import OfflineEvents from './pages/OfflineEvents';


import DonateForm from './Components/DonateForm';
import ScrollToTop from './Components/Layouts/ScrollToTop'; 

import { AuthProvider } from './AuthContext';
import CreateOfflineEvent from './Components/Programs/CreateOfflineEvent';
import TeamLead from './Components/AboutUsPage/TeamLead';
import LeaderPage from './Components/LeaderPage';
// import OurLeader from './Components/Ourleader';

import EventDetails from './Components/Programs/EventsDetails';

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
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/create" element={<CreateBlogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onlineevents" element={<OnlineEvents />} />
            <Route path="/offlineevents" element={<OfflineEvents />} />
            <Route path="/donate" element={<DonateForm />} />
            <Route path="/eventdetails/:id" element={<EventDetails />} />

            {/* Add the Create Event Route */}
            <Route path="/createofflineevent" element={<CreateOfflineEvent />} /> {/* Admin Route */}
            <Route path="/teamlead" element={<TeamLead />} />
            <Route path="/profile/:leaderId" element={<LeaderPage />} />
            {/* <Route path="/all-leaders" element={<OurLeader />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
