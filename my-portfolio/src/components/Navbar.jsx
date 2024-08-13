import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-2xl">YourName</div>
        <div className="space-x-4">
          <a href="#projects" className="text-gray-300">Projects</a>
          <a href="#about" className="text-gray-300">About</a>
          <a href="#skills" className="text-gray-300">Skills</a>
          <a href="#contact" className="text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
