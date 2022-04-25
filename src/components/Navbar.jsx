import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-bg">
            <div className="container-fluid">
                <a className="navbar-brand navbar-font" href="#">BuyMore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" aria-current="page" href="#">New Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Schedule Train</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Scheduled Train</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex" style={{ marginTop: '-5px', marginBottom: '-7px' }}>
                    <h1><i className="fa fa-user-circle-o me-2"></i></h1>
                    <h4 className="align-middle mt-2 fw-bolder" style={{ color: '#4A148C' }}>Sales Manager</h4>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;