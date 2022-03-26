import React from 'react';
import $ from "jquery";
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faThumbsUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';

class Transaksi extends React.Component {
    constructor(){
        super();
        this.state = {
            transaksi : [
                {id_transaksi: "00234", bulan: "Januari", tahun: "2022", nama: "Nindy", kelas:"XI RPL1", nominal: "600000", keterangan:"BELUM LUNAS"},
                {id_transaksi: "00253", bulan: "Januari", tahun: "2022", nama: "Citra", kelas:"XI TKJ1", nominal: "600000", keterangan: "BELUM LUNAS"},
                {id_transaksi: "00816", bulan: "Januari", tahun: "2022", nama: "Amalyani", kelas:"XI RPL1", nominal: "600000", keterangan: "BELUM LUNAS"},
            ],
            id_transaksi: "",
            bulan:"",
            tahun: "",
            nama: "",
            kelas: "",
            nominal: "",
            action: ""
        }
     }

     bind = (event) => {
        this.setState({[event.target.name]: event.target.value}); 
     }

     SaveTransaksi = (event) =>{
        event.preventDefault();
        let temp = this.state.transaksi;

        if (this.state.action === "insert") {
            temp.push({
                id_transaksi: Math.random(1,10000000),
                bulan: this.state.bulan,
                tahun: this.state.tahun,
                nama: this.state.nama,
                kelas: this.state.kelas,
                nominal: this.state.nominal,
                keterangan: this.state.keterangan
            });
        } else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.id_transaksi === this.state.id_transaksi);
            temp[index].bulan = this.state.bulan;
            temp[index].tahun = this.state.tahun;  
            temp[index].nama = this.state.nama; 
            temp[index].kelas = this.state.kelas;
            temp[index].nominal = this.state.nominal;
        }

        this.setState({transaksi: temp});
        $("#modal").modal('hide');
     }

     Add = () => { 
        this.setState({ 
            id_transaksi: "",
            bulan:"",
            tahun: "",
            nama: "",
            kelas: "",
            nominal: "",
            keterangan: "",
            action: "insert"
        });
     }

     Edit = (item) => {
        this.setState({
                id_transaksi: item.id_transaksi,
                bulan: item.bulan,
                tahun: item.tahun,
                nama: item.nama,
                kelas: item.kelas,
                nominal: item.nominal,
                action: "update"
            });
     }

     Drop = (index) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data transaksi ini?")){
            // menghapus data
            let temp = this.state.transaksi;
            // hapus data
            temp.splice(index,1);
            this.setState({transaksi: temp});
            }
     }

     searching = event => {
        if(event.keyCode === 13){
        // 13 adalah kode untuk tombol enter
        let keyword = this.state.keyword.toLowerCase()
        let tempTransaksi = this.state.transaksi
        let result = tempTransaksi.filter(item => {
        return item.id_transaksi.toLowerCase().includes(keyword) ||
        item.bulan.toLowerCase().includes(keyword) ||
        item.tahun.toLowerCase().includes(keyword) ||
        item.nama.toLowerCase().includes(keyword) ||
        item.kelas.toLowerCase().includes(keyword) ||
        item.nominal.toLowerCase().includes(keyword)
        })
        this.setState({transaksi: result})
        }
    }

    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = []
        // cek eksistensi dari data cart pada localStorage
        // jika item yang dipilih ada pada keranjang belanja
        window.confirm("Apakah anda yakin ingin membayar spp?")
        let temp = this.state.transaksi;
        tempCart.push(selectedItem)
        // simpan array tempCart ke localStorage
        localStorage.setItem("cart", JSON.stringify(tempCart))
        }

    render(){
        return(
            <div className="transaksi">
            <div className="dashboard ms-5"><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <p className='welcome-admin'>OFFICER LIST <br></br>NICA APP.</p>
                <br></br><br></br>
                <input type="text" className="form-control my-2" placeholder="Cari Transaksi" value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/>
                <br></br>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID Transaksi</th>
                                    <th>Bulan</th>
                                    <th>Tahun</th>
                                    <th>Nama</th>
                                    <th>Kelas</th>
                                    <th>Nominal</th>
                                    <th>keterangan</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.transaksi.map((item,index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.id_transaksi}</td>
                                    <td>{item.bulan}</td>
                                    <td>{item.tahun}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.kelas}</td>
                                    <td>{item.nominal}</td>
                                    <td><Badge bg="danger">{item.keterangan}</Badge></td>
                                    <td>
                                    <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.addToCart(item)}><FontAwesomeIcon icon={ faPenToSquare }/> Bayar </button> |
                                    <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.Drop(index)}><FontAwesomeIcon icon={ faTrashCan }/> Hapus </button>
                                    </td>
                                </tr>
                                );
                                })}
                            </tbody>
                        </table>
                        <br></br>
                        <button type="button" className="btn btn-dark" onClick={this.Add} data-toggle="modal" data-target="#modal">Tambah Data Transaksi</button>


                <div className="modal fade" id="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header"> 
                                <h4 class="modal-title"><b>Data Transaksi</b></h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.SaveTransaksi}>
                                Bulan
                                <input type="text" name="bulan" className="form-control mb-2" onChange={this.bind} value={this.state.bulan} required />
                                Tahun
                                <input type="text" name="tahun" className="form-control mb-2" onChange={this.bind} value={this.state.tahun} required />
                                Nama
                                <input type="text" name="nama" className="form-control mb-2" onChange={this.bind} value={this.state.nama} required />
                                Kelas
                                <input type="text" name="kelas" className="form-control mb-2" onChange={this.bind} value={this.state.kelas} required />
                                Nominal
                                <input type="text" name="nominal" className="form-control mb-2" onChange={this.bind} value={this.state.nominal} required />
                                Keterangan
                                <input type="text" name="keterangan" className="form-control mb-2" onChange={this.bind} value={this.state.keterangan} required />
                                <br></br>
                                <button className="btn btn-dark btn-block" type="submit">Simpan</button>
                            </form>
                            <br></br>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                </div>


        )
    }
}

export default Transaksi;