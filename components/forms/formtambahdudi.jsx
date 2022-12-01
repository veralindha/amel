import { useState } from "react"
import Card from "../utils/card"

export default function TambahDataDudiForm() {
  const handleSubmitDudi = () => { }

  return (
    <Card cardIcon="fa-user">
      <div className="container-fluid">
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName1">Nama</label>
                <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={'namaSiswa'} onChange={(e) => setNamaSiswa(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName2">DUDI</label>
                <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" value={'namaOrangTua'} onChange={(e) => setNamaOrangTua(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-8">
              <div>
                <label htmlFor="alamat">Alamat</label>
                <input type="textarea" className="form-control form-control-sm text-left" id="alamat" value={'alamat'} onChange={(e) => setAlamat(e.target.value)} />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="alamat">Telpon</label>
                <input type="tel" className="form-control form-control-sm text-left" id="alamat" value={'alamat'} onChange={(e) => setAlamat(e.target.value)} />
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