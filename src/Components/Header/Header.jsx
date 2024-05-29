import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  const navItems = [
    { label: "Home", href: "/"},
    { label: "About", href: "/about"},
    { label: "Products", href: "/"},
    { label: "Become a distributor", href: "/"},
    { label: "Private label", href: "/"},
    { label: "Blog", href: "/"},
    { label: "Contact", href: "/"},
  ]
  return (
    <header className="dgSpf-header">
      <div className="dgSpf-header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dgSpf-header__wrap">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="dgSpf-header__search">
                      <form className="d-flex mt-3 mt-lg-0" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="search-btn" type="submit"><i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <ul className="dgSpf-header__buttons d-flex justify-content-end gap-3">
                      <li>
                        <a className="dgSpf-button dgSpf-button__border" href=''>
                          Distributor
                        </a>
                      </li>
                      <li>
                        <a className="dgSpf-button dgSpf-button__white" href=''>
                          Catalogue
                        </a>
                      </li>
                      <li>
                        <a className="dgSpf-button dgSpf-button__link p-0" href=''>
                          <span><i className="fa-solid fa-envelope"></i></span>
                          <p>email</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dgSpf-header__bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
                <a className="navbar-brand p-0 m-0" href="#">
                  <img src={logo} alt="..." width="225" height="32" />
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                          <Link className="nav-link" to={item.href}>{item.label}</Link>
                        </li>
                      ))}
                      {/* <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Product</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Products
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Become a distributor</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Private label</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
