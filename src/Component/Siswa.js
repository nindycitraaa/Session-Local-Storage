import React from 'react';
import $ from "jquery";
import "./siswa.css";

class Siswa extends React.Component {
    constructor(){
        super();
        this.state = {
            siswa : [
                {nis: "100", nama: "Nindy ", alamat: "Jl danau ranau G6 A13, Malang"},
                {nis: "101", nama: "Citra ", alamat: "Jl danau towuti G14A , Surabaya"},
                {nis: "102", nama: "Amalyani ", alamat: "Jl Danau Maninjau C14B, Jakarta"},
            ],
            nis: "",
            nama: "",
            alamat: "",
            action: ""
        }
     }

     bind = (event) => {
        this.setState({[event.target.name]: event.target.value}); 
     }

     SaveSiswa = (event) =>{
        event.preventDefault();
        let temp = this.state.siswa;

        if (this.state.action === "insert") {
            temp.push({
                nis: this.state.nis,
                nama: this.state.nama,
                alamat: this.state.alamat
            });
        } else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.nis === this.state.nis);
            temp[index].nama = this.state.nama; 
            temp[index].alamat = this.state.alamat;
        }

        this.setState({siswa: temp});
        $("#modal").modal('hide');
     }

     Add = () => { 
        this.setState({ 
            nis: "",
            nama: "",
            alamat: "",
            action: "insert"
        });
     }

     Edit = (item) => {
        this.setState({
                nis: item.nis,
                nama: item.nama,
                alamat: item.alamat,
                action: "update"
            });
     }

     Drop = (index) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data siswa ini?")){
            // menghapus data
            let temp = this.state.siswa;
            // hapus data
            temp.splice(index,1);
            this.setState({siswa: temp});
            }
     }

     searching = event => {
        if(event.keyCode === 13){
        // 13 adalah kode untuk tombol enter
        let keyword = this.state.keyword.toLowerCase()
        let tempSiswa = this.state.siswa
        let result = tempSiswa.filter(item => {
        return item.nis.toLowerCase().includes(keyword) ||
        item.nama.toLowerCase().includes(keyword) ||
        item.alamat.toLowerCase().includes(keyword)
        })
        this.setState({siswa: result})
        }
    }

    render(){
        return(
            <div className="siswa">
                <div className="dashboard ms-5"><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p className='welcome-admin'>STUDENT LIST <br></br>NICA APP.</p>
                    <br></br><br></br>

                    <input type="text" className="form-control my-2" placeholder="Seacrh Student" value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/> <br></br>
                <button type="button" className="btn btn-dark" onClick={this.Add} data-toggle="modal" data-target="#modal">Add Student</button>
                <br></br>
                <ul className="list-group mb-2 mb-lg-0">
                {this.state.siswa.map((item,index) => {
                    return (
                        <li className="list-group-item flush" key={index}>
                            <h5>{item.nama}</h5>
                            <h6>NIS: {item.nis}</h6>
                            <h6>Alamat: {item.alamat}</h6>
                            <button className="btn btn-outline-dark m2" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal">Edit</button>
                            <button className="btn btn-outline-dark m1" onClick={() => this.Drop(index)}> Hapus </button>
                        </li>
                        );
                    })}
                </ul>
                </div>
                <br></br>

                <div className="modal fade" id="modal" >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header"> 
                                <h4 class="modal-title">Data Siswa</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.SaveSiswa}>
                                NIS
                                <input type="text" name="nis" className="form-control mb-2" onChange={this.bind} value={this.state.nis} required />
                                Nama
                                <input type="text" name="nama" className="form-control mb-2" onChange={this.bind} value={this.state.nama} required />
                                Alamat
                                <input type="text" name="alamat" className="form-control mb-2" onChange={this.bind} value={this.state.alamat} required />
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

export default Siswa;