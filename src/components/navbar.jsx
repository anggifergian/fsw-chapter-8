const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="navbar-brand mb-0 h1">
          Totals{" "}
          <span
            className={
              props.totalNumbers === 0 ? "badge badge-warning" : "badge badge-success"
            }
          >
            {props.totalNumbers}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
