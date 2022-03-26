import React from 'react';
import Utama from './Component/Utama';
import {Link} from 'react-router-dom';
import pay from './pay.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCreditCard, faFileLines, faHamburger, faFish, faBarsStaggered, faWallet, faUserGroup, faUserGraduate, faDollarSign, faBriefcase, faBarsProgress } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  render(){
  return (
    <div>
        <nav className="navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4 ms-5" href="#">
                    NICA APP
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                        </ul>
                        <div className="buttons">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/siswa">Siswa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/petugas">Petugas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/spp">SPP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/kelas">Kelas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/transaksi">Transaksi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/laporan">Laporan</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
     <p><Utama /></p>
    </div>
  );
  }
}

export default App;