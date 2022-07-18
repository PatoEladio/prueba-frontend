import { Link } from 'wouter';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">
            Sin nombre
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-white"
                  aria-current="page"
                  href="/products"
                >
                  Productos
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/about">
                  Sobre nosotros
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/contact">
                  Contacto
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul></ul>
            <form class="d-flex" role="search">
              <Link to="/login">
                <button type="button" class="btn btn-light">
                  Iniciar sesion
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
