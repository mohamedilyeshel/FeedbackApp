import { Link } from "react-router-dom";
function Header({ appTitle, desc }) {
  const headerStyle = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#ff6a95",
    padding: "1rem",
  };

  return (
    <header style={headerStyle}>
      <Link to="/">
        <h1>{appTitle}</h1>
      </Link>
      <p>{desc}</p>
    </header>
  );
}

Header.defaultProps = {
  appTitle: "FeedBack App",
  desc: "a React application to make CRUD of feedbacks",
};

export default Header;
