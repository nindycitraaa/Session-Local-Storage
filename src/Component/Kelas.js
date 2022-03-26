import React from 'react';
import $ from "jquery";

class Kelas extends React.Component {
    constructor(){
        super();
        this.state = {
            kelas : [
                {jurusan: "Rekayasa Perangkat Lunak", nama: "XI RPL1", angkatan: "29"},
                {jurusan: "Teknik Komputer Jaringan", nama: "XI TKJ1", angkatan: "29"},
            ],
            jurusan: "",
            nama: "",
            angkatan: "",
            action: ""
        }
     }

     bind = (event) => {
        this.setState({[event.target.name]: event.target.value}); 
     }

     SaveKelas = (event) =>{
        event.preventDefault();
        let temp = this.state.kelas;

        if (this.state.action === "insert") {
            temp.push({
                jurusan: this.state.jurusan,
                nama: this.state.nama,
                angkatan: this.state.angkatan
            });
        } else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.jurusan === this.state.jurusan);
            temp[index].nama = this.state.nama; 
            temp[index].jurusan = this.state.jurusan; 
            temp[index].angkatan = this.state.angkatan;
        }

        this.setState({kelas: temp});
        $("#modal").modal('hide');
     }

     Add = () => { 
        this.setState({ 
            jurusan: "",
            nama: "",
            angkatan: "",
            action: "insert"
        });
     }

     Edit = (item) => {
        this.setState({
                jurusan: item.jurusan,
                nama: item.nama,
                angkatan: item.angkatan,
                action: "update"
            });
     }

     Drop = (index) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data kelas ini?")){
            // menghapus data
            let temp = this.state.kelas;
            // hapus data
            temp.splice(index,1);
            this.setState({kelas: temp});
            }
     }

     searching = event => {
        if(event.keyCode === 13){
        // 13 adalah kode untuk tombol enter
        let keyword = this.state.keyword.toLowerCase()
        let tempKelas = this.state.kelas
        let result = tempKelas.filter(item => {
        return item.jurusan.toLowerCase().includes(keyword) ||
        item.nama.toLowerCase().includes(keyword) ||
        item.angkatan.toLowerCase().includes(keyword)
        })
        this.setState({kelas: result})
        }
    }

    render(){
        return(
            <div className="siswa">
                <div className="dashboard ms-5"><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p className='welcome-admin'>CLASS LIST <br></br>NICA APP.</p>
                    <br></br><br></br>
                <input type="text" className="form-control my-2" placeholder="Cari Kelas" value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/>
                <br></br>

                <button type="button" className="btn btn-dark" onClick={this.Add} data-toggle="modal" data-target="#modal">Add Class</button>
                <br></br>
                <ul className="list-group">
                {this.state.kelas.map((item,index) => {
                    return (
                        <li className="list-group-item flush" key={index}>
                            <h5><b>{item.nama}</b></h5>
                            <h6>Jurusan: {item.jurusan}</h6>
                            <h6>Angkatan: {item.angkatan}</h6>
                            <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal">Edit</button>
                            <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.Drop(index)}> Hapus </button>
                        </li>
                        );
                    })}
                </ul>

                <br></br>

                <div className="modal fade" id="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header"> 
                                <h4 class="modal-title"><b>Data Kelas</b></h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.SaveKelas}>
                                Nama Kelas
                                <input type="text" name="nama" className="form-control mb-2" onChange={this.bind} value={this.state.nama} required />
                                Jurusan
                                <input type="text" name="jurusan" className="form-control mb-2" onChange={this.bind} value={this.state.jurusan} required />
                                Angkatan
                                <input type="text" name="angkatan" className="form-control mb-2" onChange={this.bind} value={this.state.angkatan} required />
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

export default Kelas;