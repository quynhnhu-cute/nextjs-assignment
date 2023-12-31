const NavBar = () => {
  return (
    <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            Menu <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand" href="index.html">
            Start Bootstrap
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/create">Create Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/post">Sample Post</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
