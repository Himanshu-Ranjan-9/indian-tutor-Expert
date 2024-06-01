import { useEffect, useState, useContext } from 'react';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { SidebarContext } from '../../context/sidebarContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1); // State to track the active link
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('Tutor-sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClick = (id) => {
    setActiveLinkIdx(id); // Update the active link index
  };

  return (
    <div className={`Tutor-sidebar ${sidebarClass}`}>
      <div className="Tutor-user-info">
        <div className="Tutor-info-img w-full p-0">
          <img src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1716668213~exp=1716671813~hmac=5133370891b3b1fab2632a7f3789f5d0b55e70688656faf25c00b91befeb3b84&w=740" alt="profile image" />
        </div>
        <span className="Tutor-info-name text-black">Teacher Name</span>
      </div>

      <nav className="Tutor-navigation">
        <ul className="Tutor-nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="Tutor-nav-item" key={navigationLink.id}>
              <Link
                to={navigationLink.to}
                className={`Tutor-nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}
                onClick={() => handleClick(navigationLink.id)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={navigationLink.id === activeLinkIdx ? { background: 'orange-500' } : {}}
              >
                <img src={navigationLink.image} className="Tutor-nav-link-icon" alt={navigationLink.title} />
                <span className="Tutor-nav-link-text ">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
