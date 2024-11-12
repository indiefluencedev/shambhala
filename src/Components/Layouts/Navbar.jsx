import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../../assets/logo.png';
import { auth } from '../../config/firebase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProgramDropdown = () => {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsProgramDropdownOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
        setIsProgramDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
        console.log('Logged out successfully');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-lg shadow-md w-full sticky top-0 left-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 lg:px-6">
        <div className="flex items-center">
          <img src={logo} alt="Shambhala Logo" className="w-20 h-20" />
        </div>

        <ul className="hidden lg:flex space-x-6 lg:space-x-8 text-base lg:text-[16px] font-semibold">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'}>
              ABOUT US
            </NavLink>
          </li>

          <li className="relative" ref={dropdownRef}>
            <div className="cursor-pointer flex items-center text-gray-800 hover:text-green-600 transition-colors duration-300" onClick={toggleProgramDropdown}>
            EVENTS
              <IoMdArrowDropdown className={`ml-1 transition-transform ${isProgramDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {isProgramDropdownOpen && (
                <motion.ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white rounded shadow-lg text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <li>
                    <NavLink to="/OnlineEvents" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsProgramDropdownOpen(false); setIsOpen(false); }}>
                      Online Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/offlineevents" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsProgramDropdownOpen(false); setIsOpen(false); }}>
                      Offline Events
                    </NavLink>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="relative" ref={dropdownRef}>
            <div className="cursor-pointer flex items-center text-gray-800 hover:text-green-600 transition-colors duration-300" onClick={toggleDropdown}>
              RESOURCES
              <IoMdArrowDropdown className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white rounded shadow-lg text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <li>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}>
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/books" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}>
                      Books
                    </NavLink>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'} onClick={() => setIsOpen(false)}>
              CONTACT
            </NavLink>
          </li>

          {user && (
            <li>
              <button onClick={handleLogout} className="text-red-600 hover:text-red-800 transition-colors duration-300">
                Logout
              </button>
            </li>
          )}
        </ul>

        <div className="hidden lg:block">
          <NavLink to="/donate" className={({ isActive }) => isActive ? 'bg-green-700 text-white py-2 px-3 lg:px-4 rounded' : 'bg-[#164453] text-white py-2 px-3 lg:px-4 rounded hover:bg-green-700 transition-colors duration-300'}>
            DONATE HERE
          </NavLink>
        </div>

        <div className="flex items-center lg:hidden">
          {isOpen ? <HiOutlineX className="text-3xl cursor-pointer" onClick={toggleMenu} /> : <HiOutlineMenuAlt4 className="text-3xl cursor-pointer" onClick={toggleMenu} />}
        </div>
      </div>

      <motion.div ref={mobileMenuRef} className={`${isOpen ? 'block' : 'hidden'} bg-white shadow-md fixed top-16 left-0 w-full z-50 mt-10`} initial={{ opacity: 0, y: -50 }} animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }} transition={{ duration: 0.5 }}>
        <ul className="flex flex-col space-y-4 text-center text-lg font-semibold py-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'} onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'} onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
              ABOUT US
            </NavLink>
          </li>

          <li>
            <div className="cursor-pointer flex items-center justify-center text-gray-800 hover:text-green-600 transition-colors duration-300" onClick={toggleProgramDropdown}>
            EVENTS   
              <IoMdArrowDropdown className={`ml-1 transition-transform ${isProgramDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {isProgramDropdownOpen && (
                <motion.ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white rounded shadow-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <li>
                    <NavLink to="/OnlineEvents" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsProgramDropdownOpen(false); toggleMenu(); }}>
                      Online Events
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/OfflineEvents" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsProgramDropdownOpen(false); toggleMenu(); }}>
                      Offline Events
                    </NavLink>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <div className="cursor-pointer flex items-center justify-center text-gray-800 hover:text-green-600 transition-colors duration-300" onClick={toggleDropdown}>
              RESOURCES
              <IoMdArrowDropdown className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white rounded shadow-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                  <li>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsDropdownOpen(false); toggleMenu(); }}>
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsDropdownOpen(false); toggleMenu(); }}>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/books" className={({ isActive }) => isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'} onClick={() => { setIsDropdownOpen(false); toggleMenu(); }}>
                      Books
                    </NavLink>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'} onClick={() => { toggleMenu(); setIsDropdownOpen(false); }}>
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className={({ isActive }) => isActive ? 'bg-green-700 text-white py-2 px-3 lg:px-4 rounded' : 'bg-[#164453] text-white py-2 px-3 lg:px-4 rounded hover:bg-green-700 transition-colors duration-300'} onClick={toggleMenu}>
              DONATE HERE
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
