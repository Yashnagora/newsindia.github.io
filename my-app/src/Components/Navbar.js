import { Link } from 'react-router-dom'

const Navbar = (props) =>{


    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
        </ul>
        <div className={`form-check form-switch text-dark mx-5`}>
    <input className="form-check-input"  type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleMode}  />
    <label className={`form-check-label text-${props.Color}`} htmlFor="flexSwitchCheckDefault" >{props.Text}</label>
</div>
    </div>
  </div>
</nav>
      </div>
    )
  }
  export default Navbar



