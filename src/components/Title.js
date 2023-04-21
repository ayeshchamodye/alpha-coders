import ".././styles.css";

const Title = () => {
  return (
    <div className="nav-link">
      <ul className="headernav">
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

export default Title;
