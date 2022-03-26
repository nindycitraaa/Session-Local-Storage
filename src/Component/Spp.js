import React from 'react';
import $ from "jquery";
import "./spp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faThumbsUp, faTrashCan } from '@fortawesome/free-solid-svg-icons';

class Spp extends React.Component {
    constructor(){
        super()
        this.state = {
        spp: [
        {
        id_spp:"12345", judul:"SPP29-2022", angkatan:"29",
        tahun:"2022", harga: 600000,
        cover:"https://cdn3d.iconscout.com/3d/premium/thumb/card-payment-3966265-3286982.png"
        },
        {
        id_spp:"12346", judul:"SPP30-2022", angkatan:"30",
        tahun:"2022", harga: 550000,
        cover:"https://cdn3d.iconscout.com/3d/premium/thumb/payment-done-4039160-3345822@0.png"
        },
        {
        id_spp:"54321", judul:"SPP31-2022", angkatan:"31",
        tahun:"2022", harga: 500000,
        cover:"https://cdn3d.iconscout.com/3d/free/thumb/payment-successful-3543010-2969397.png"
        },

        ],
        action: "",
        id_spp: "",
        judul: "",
        angkatan: "",
        tahun: "",
        harga: 0,
        cover: "",
        selectedItem: null,
        }

    }

    Add = () => { 
        this.setState({ 
            id_spp: Math.random(1,10000000),
            judul: "",
            angkatan: "",
            tahunt: "",
            cover: "",
            harga: 0,
            action: "insert"
        });
     }

     Edit = (item) => {
        this.setState({
                id_spp: item.id_spp,
                judul: item.judul,
                angkatan: item.angkatan,
                tahun: item.tahun,
                harga: item.harga,
                cover: item.cover,
                action: "update"
            });
     }

    Save = (event) =>{
        event.preventDefault();
        let temp = this.state.spp

        if (this.state.action === "insert") {
            temp.push({
                id_spp: this.state.id_spp,
                judul: this.state.judul,
                angkatan: this.state.angkatan,
                tahun: this.state.tahun,
                cover: this.state.cover,
                harga: this.state.harga,
            });
        } else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.id_spp === this.state.id_spp);
            temp[index].judul = this.state.judul; 
            temp[index].angkatan = this.state.angkatan;
            temp[index].tahun = this.state.tahun;
            temp[index].cover = this.state.cover;
            temp[index].harga = this.state.harga;
        }
        this.setState({spp : temp})
        // menutup komponen modal_spp
        $("#modal_spp").modal("hide")
     }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data spp ini?")){
        // menghapus data
        let tempSpp = this.state.spp
        // posisi index data yg akan dihapus
        let index = tempSpp.indexOf(item)
        // hapus data
        tempSpp.splice(index, 1)
        this.setState({spp: tempSpp})
        }
    }

    searching = event => {
        if(event.keyCode === 13){
        // 13 adalah kode untuk tombol enter
        let keyword = this.state.keyword.toLowerCase()
        let tempSpp = this.state.spp
        let result = tempSpp.filter(item => {
        return item.judul.toLowerCase().includes(keyword) ||
        item.angkatan.toLowerCase().includes(keyword) ||
        item.tahun.toLowerCase().includes(keyword)
        })
        this.setState({spp: result})
        }
    }



    render(){     
        return(
            <div className="spp">
                <div className="dashboard-spp ms-5"><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                    <p className='welcome-admin'>SPP LIST <br></br>NICA APP.</p>
                    <br></br><br></br>
                    <div className='content'>
                <input type="text" className="form-control my-2" placeholder="Cari Data SPP" value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/>
                <div className="row">
                    { this.state.spp.map( (item, index) => (
                    <div className="col-lg-4 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5">
                            <img src={item.cover} className="img" height="200" />
                        </div>
                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5><b>{ item.judul }</b>
                            </h5>
                            <h6 className="text-dark">
                                Angkatan: { item.angkatan}
                            </h6>
                            <h6 className="text-dark">
                                Tahun: { item.tahun}
                            </h6>
                            <h6 className="text-danger">
                                Nominal: Rp { item.harga}
                            </h6>
                            <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal_spp"><FontAwesomeIcon icon={ faPenToSquare }/> Edit</button> 
                            <button className="btn btn-sm btn-outline-dark m1" onClick={() => this.Drop(index)}><FontAwesomeIcon icon={ faTrashCan }/> Hapus </button>

                        </div>

                    </div>
                </div>
            </div>
                    )) }

                </div>
                <br></br>
                <button type="button" data-toggle="modal" data-target="#modal_spp" className="btn btn-dark" onClick={() => this.Add()}>Add SPP</button>
                </div>
                <br></br>

                <div id="modal_spp" className="modal" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">

                                <h4 class="modal-title">Data SPP</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.Save}>
                                Nama
                                <input type="text" className="form-control mb-2" value={this.state.judul} onChange={ ev => this.setState({judul:ev.target.value}) } required />
                                Angkatan
                                <input type="text" className="form-control mb-2" value={this.state.angkatan} onChange={ ev => this.setState({angkatan: ev.target.value}) } required />
                                Tahun
                                <input type="text" className="form-control mb-2" value={this.state.tahun} onChange={ ev => this.setState({tahun: ev.target.value}) } required />
                                Nominal
                                <input type="number" className="form-control mb-2" value={this.state.harga} onChange={ ev => this.setState({harga:ev.target.value}) } required />
                                Gambar Ilustrasi
                                <input type="url" className="form-control mb-2" value={this.state.cover} onChange={ ev => this.setState({cover:ev.target.value}) } required />
                                <br></br>
                                <button className="btn btn-dark btn-block" type="submit">Simpan</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>   

            </div>
        )
        }
}

export default Spp;