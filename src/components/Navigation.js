import "../assets/css/navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>
          aron<span>movie</span>.
        </h1>
      </div>
      <ul className="navbar-nav">
        <li>Trending</li>
        <li>Popular</li>
      </ul>
    </div>
  );
};

export default Navigation;
