import React from 'react';
const Navbar = (props) => {
  return (
    <>
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mymode} bg-${props.mymode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">textUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{position:"relative"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
              <div className={`form-check form-switch text-${props.mymode==='light'?'dark':'light'}`} style={{position:"absolute",right:'20px'}}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mymode==='light'?'Dark':'light'} Mode</label>
            
            </div>
</div>
          
        </div>
      </nav>
    </div>
    </>
  )
}

// Navbar.propTypes = {title : PropTypes.string, aboutText: PropTypes.string}
// Navbar.defaultProps = {title : "Set title here",aboutText : "Set about text here"};

export default Navbar