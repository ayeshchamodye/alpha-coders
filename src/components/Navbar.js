import ".././styles.css";

const Navbar = () => {
  return (
    <div className="sidenav active">
      <ul>
        <li>
          <a className="hover-underline-animation">Home</a>
        </li>
        <li>
          <a className="hover-underline-animation">About Us</a>
        </li>
        <li>
          <a className="hover-underline-animation">Services</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
