import React from 'react'
import $ from "jquery";
import "./petugas.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faThumbsUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';

class Petugas extends React.Component {
    constructor(){
        super();
        this.state = {
            petugas : [
                {nip: "19811031 200912 1 001", nama: "Bima", alamat: "Jl P Diponegoro, Dki Jakarta", telepon:"08123493540"},
                {nip: "19811031 200912 1 002", nama: "Zaka", alamat: "Jl Letjen TB Simatupang 57, Dki Jakarta", telepon:"08125683290"},
                {nip: "19811031 200912 1 003", nama: "Putri", alamat: " Jl P Jayakarta 53, Dki Jakarta", telepon:"081258160625"},
            ],
            nip: "",
            nama: "",
            alamat: "",
            telepon: "",
            action: ""
        }
     }

     bind = (event) => {
        this.setState({[event.target.name]: event.target.value}); 
     }

     SavePetugas = (event) =>{
        event.preventDefault();
        let temp = this.state.petugas;

        if (this.state.action === "insert") {
            temp.push({
                nip: this.state.nip,
                nama: this.state.nama,
                alamat: this.state.alamat,
                telepon: this.state.telepon
            });
        } else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.nip === this.state.nip);
            temp[index].nama = this.state.nama; 
            temp[index].alamat = this.state.alamat;
            temp[index].telepon = this.state.telepon;
        }

        this.setState({petugas: temp});
        $("#modal").modal('hide');
     }

     Add = () => { 
        this.setState({ 
            nip: "",
            nama: "",
            alamat: "",
            telepon: "",
            action: "insert"
        });
     }

     Edit = (item) => {
        this.setState({
                nip: item.nip,
                nama: item.nama,
                alamat: item.alamat,
                telepon: item.telepon,
                action: "update"
            });
     }

     Drop = (index) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data petugas ini?")){
            // menghapus data
            let temp = this.state.petugas;
            // hapus data
            temp.splice(index,1);
            this.setState({petugas: temp});
            }
     }

     searching = event => {
        if(event.keyCode === 13){
        // 13 adalah kode untuk tombol enter
        let keyword = this.state.keyword.toLowerCase()
        let tempPetugas = this.state.petugas
        let result = tempPetugas.filter(item => {
        return item.nip.toLowerCase().includes(keyword) ||
        item.nama.toLowerCase().includes(keyword) ||
        item.alamat.toLowerCase().includes(keyword) ||
        item.telepon.toLowerCase().includes(keyword)
        })
        this.setState({petugas: result})
        }
    }

    render(){
        return(
            <div className="petugas">
                <div className="dashboard ms-5"><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p className='welcome-admin'>OFFICER LIST <br></br>NICA APP.</p>
                    <br></br><br></br>

                    <input type="text" className="form-control my-2" placeholder="Cari Petugas" value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/>
                <br></br>
               <br></br>
                <table className="table">
                            <thead>
                                <tr>
                                    <th>NIP</th>
                                    <th>Nama</th>
                                    <th>Alamat</th>
                                    <th>Telepon</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.petugas.map((item,index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.nip}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.alamat}</td>
                                    <td>{item.telepon}</td>
                                    <td>
                                    <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal"><FontAwesomeIcon icon={ faPenToSquare }/></button> | 
                                    <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.Drop(index)}><FontAwesomeIcon icon={ faTrashCan }/></button>
                                    </td>
                                </tr>
                                );
                                })}
                            </tbody>
                        </table>
                        <br></br>
                        <button type="button" className="btn btn-dark" onClick={this.Add} data-toggle="modal" data-target="#modal">Add Petugas</button>
                </div>
                <br></br>

                <div className="modal fade" id="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header"> 
                                <h4 class="modal-title"><b>Data Petugas</b></h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.SavePetugas}>
                                NIP
                                <input type="text" name="nip" className="form-control mb-2" onChange={this.bind} value={this.state.nip} required />
                                Nama
                                <input type="text" name="nama" className="form-control mb-2" onChange={this.bind} value={this.state.nama} required />
                                Alamat
                                <input type="text" name="alamat" className="form-control mb-2" onChange={this.bind} value={this.state.alamat} required />
                                No Telepon
                                <input type="text" name="telepon" className="form-control mb-2" onChange={this.bind} value={this.state.telepon} required />
                                <br></br>
                                <button className="btn btn-dark btn-block" type="submit">Simpan</button>
                            </form>
                            <br></br>
                            </div>
                        </div>
                    </div>
                </div>

               </div>


        )
    }
}

export default Petugas;