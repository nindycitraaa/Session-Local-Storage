import React from 'react';

import { Badge } from 'react-bootstrap';

class Laporan extends React.Component {
    constructor(){
        super()
        this.state = {
        cart: [], // untuk menyimpan list cart
        }
    }

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
        tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        // memasukkan data cart, user, dan total harga pada state
        this.setState({
        cart: tempCart
        })
    }

    componentDidMount(){
        this.initCart()
    }


render(){
return(
    <div className="laporan">
        <div className="dashboard ms-5"><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p className='welcome-admin'>PAYMENT REPORT <br></br>NICA APP.</p>
                    <br></br><br></br>
                <br></br>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID Transaksi</th>
                                    <th>Bulan</th>
                                    <th>Tahun</th>
                                    <th>Nama</th>
                                    <th>Kelas</th>
                                    <th>Nominal</th>
                                    <th>keterangan</th>
                                </tr>
                            </thead>
                        <tbody>
                            { this.state.cart.map( (item, index) =>
                            (
                                <tr key={index}>
                                    <td>{item.id_transaksi}</td>
                                    <td>{item.bulan}</td>
                                    <td>{item.tahun}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.kelas}</td>
                                    <td>{item.nominal}</td>
                                    <td><Badge bg="success">LUNAS</Badge></td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>


        </div>
    </div>
        )
        }
}

export default Laporan;