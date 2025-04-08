// import React, { useState } from "react";
// import Logo from "../../assets/logo.svg";
// import "./Header.css";
// import { IoMenu } from "react-icons/io5";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => {
//     setIsOpen(true);
//   };
//   return (
//     <header>
//       <div className="logo">
//         <img src={Logo} alt="" />
//       </div>
//       <nav>
//         <li>Find passion</li>
//         <li>Categories</li>
//         <li>Skills</li>
//         <li>Customer</li>
//       </nav>
//       <div className="header_buttons">
//         <button className="login">Login</button>
//         <button className="free">Free Trial</button>
//         <div className="menu_icon" onClick={handleOpen}>
//           <IoMenu />
//         </div>
//       </div>

//       {isOpen ?? (
//         <>
//           <div className="menu_box">
//             <nav>
//               <li>Find passion</li>
//               <li>Categories</li>
//               <li>Skills</li>
//               <li>Customer</li>
//             </nav>
//             <div className="header_buttons">
//               <button className="login">Login</button>
//               <button className="free">Free Trial</button>
//             </div>
//           </div>
//         </>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <nav className="desktop_nav">
        <li>Find passion</li>
        <li>Categories</li>
        <li>Skills</li>
        <li>Customer</li>
      </nav>

      <div className="header_buttons">
        <button className="login">Login</button>
        <button className="free">Free Trial</button>
        <div className="menu_icon" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </div>

      {isOpen && (
        <div className="menu_box">
          <div className="close_icon" onClick={toggleMenu}>
            <IoClose />
          </div>
          <ul className="mobile_nav">
            <li>Find passion</li>
            <li>Categories</li>
            <li>Skills</li>
            <li>Customer</li>
          </ul>
          <div className="mobile_buttons">
            <button className="login">Login</button>
            <button className="free">Free Trial</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
