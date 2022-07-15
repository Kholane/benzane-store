import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Nav(){
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-light navbar-light px-4 px-lg-5 py-3 py-lg-0">
    <Link className={'navbar-brand p-0'} to="/">
    <h1 className="m-0">Benzane</h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <h3><i className="bi bi-list"></i></h3>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
        <Link className={'nav-item nav-link'} to="/shop">Shop</Link>
            <a href="about.html" className="nav-item nav-link">help</a>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
        </div>
        <a href="contact.html" className="btn btn-dark rounded-pill text-light py-2 px-4 ms-lg-5"><i className="bi bi-telephone"></i> +27 79 939 5147</a>
    </div>
</nav>
    )
}