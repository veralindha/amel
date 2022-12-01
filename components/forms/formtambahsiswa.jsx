import { useState } from "react"
import Card from "../utils/card"

export default function TambahDataSiswaForm() {
  const handleSubmitSiswa = () => { }
  
  return (
    <Card cardTitle="Siswa" cardIcon="fa-user">
      <div className="container-fluid">
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName1">Nama Siswa</label>
                <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={'namaSiswa'} onChange={(e) => setNamaSiswa(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName2">NISN</label>
                <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" value={'namaOrangTua'} onChange={(e) => setNamaOrangTua(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName1">Jurusan</label>
                <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={'namaSiswa'} onChange={(e) => setNamaSiswa(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName2">Deskripsi</label>
                <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" value={'namaOrangTua'} onChange={(e) => setNamaOrangTua(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-4">
              <div>
                <label htmlFor="tgl">Tanggal Lahir</label>
                <input type="date" className="form-control form-control-sm text-left" id="tgl" value={'tanggalLahir'} onChange={(e) => setTanggalLahir(e.target.value)} />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label for="telp">Nomer Telepon</label>
                <input type="tel" className="form-control form-control-sm" name="telp" id="telp" value={'notelp'} onChange={(e) => setNotelp(e.target.value)} />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label for="telp">Nomer Telepon Orang Tua</label>
                <input type="tel" className="form-control form-control-sm" name="telp" id="telp" value={'notelp'} onChange={(e) => setNotelp(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <div>
                <label htmlFor="alamat">Nama Orang Tua</label>
                <input type="textarea" className="form-control form-control-sm text-left" id="alamat" value={'alamat'} onChange={(e) => setAlamat(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary" onClick={() => handleCreate()}>Simpan</button>
        </div>
      </div>
    </Card>
  )
}