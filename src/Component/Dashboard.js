import React from 'react'
import "./dashboard.css"
import logo from './logo.png';
import illus from './illus.png';
import { Button } from 'react-bootstrap';

class Dashboard extends React.Component {
    render(){
        return(
            <div className="dashboard ms-5"><br></br>
                    <p className='location-header'>SPP APP/ Dashboard Admin</p>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p className='welcome-admin'>WELCOME TO <br></br>DASHBOARD NICA APP.</p>
                    <p className='Desc-header'>Sustainability, Easy, and Innovation</p>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <a className='link' href="/transaksi">Show All Transaction</a>
            </div>
        )
    }
}

export default Dashboard;