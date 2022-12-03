import { useEffect, useState } from "react"
import { supabase } from "../../libs/supabase.lib"
import Swal from "sweetalert2"
import Card from "../utils/card"

export default function TambahDataSiswaForm() {
  const [dudi, setDudi] = useState([])
  const [nisn, setNisn] = useState('')
  const [nama, setNama] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [alamat, setAlamat] = useState('')
  const [no_telp, setNoTelp] = useState('')
  const [ttl, setTtl] = useState('')
  const [nama_ortu, setNamaOrtu] = useState('')
  const [no_telp_ortu, setNoTelpOrtu] = useState('')
  const [selectedDudi, setSelectDudi] = useState('')
  const clearInput = () => {
    setNisn('')
    setNama('')
    setJurusan('')
    setDeskripsi('')
    setAlamat('')
    setNoTelp('')
    setTtl('')
    setNamaOrtu('')
    setNoTelpOrtu('')
    setSelectDudi('')
  }
  const handlerGetDudi = async () => {
    let {data, error} = await supabase.from('Dudi').select()
    if (error) console.error(error)
    setDudi(data)
  }
  const handleCreateUser = async () => {
    const userdata = {
      username: nisn,
      password: nisn,
      role: 'siswa'
    }
    let { data, error } = await supabase.from('User').insert(userdata).select();
    if (error) Swal.fire('Error', 'Error while creating user data!', 'error')
    else return data
  }
  const handleSubmitSiswa = async () => {
    const userdata = await handleCreateUser();
    const idata = {
      nisn: nisn,
      nama_siswa: nama,
      jurusan: jurusan,
      deskripsi: deskripsi,
      alamat: alamat,
      no_telp: no_telp,
      ttl: ttl,
      nama_ortu: nama_ortu,
      no_telp_ortu: no_telp_ortu,
      userId: userdata ? userdata[0].id : null,
      DudiId: parseInt(selectedDudi)
    }
    let { data, error } = await supabase.from('DataSiswa').insert(idata).select()
    if (error) {
      Swal.fire('Error', 'Error while saving data!', 'error')
    } else {
      Swal.fire('Success', 'Data tersimpan!', 'success')
      clearInput()
    }
  }

  useEffect(() => {
    handlerGetDudi()
  }, [])

  return (
    <Card cardTitle="Siswa" cardIcon="fa-user">
      <div className="container-fluid">
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName1">Nama Siswa</label>
                <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={nama} onChange={(e) => setNama(e.target.value)} required />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label htmlFor="exampleInputName2">NISN</label>
                <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" value={nisn} onChange={(e) => setNisn(e.target.value)} required />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-4">
              <div>
                <label htmlFor="exampleInputName1">Jurusan</label>
                <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={jurusan} onChange={(e) => setJurusan(e.target.value)} required />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="exampleInputName1">DUDI</label>
                <select className="form-control form-control-sm" onChange={(e) => setSelectDudi(e.target.value)}>
                  <option value="">Pilih...</option>
                  {dudi.map((d, i) => (
                    <option key={i} value={d.id}>{d.nama_dudi}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="exampleInputName2">Deskripsi Bidang</label>
                <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} required />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-4">
              <div>
                <label htmlFor="tgl">Tanggal Lahir</label>
                <input type="date" className="form-control form-control-sm text-left" id="tgl" value={ttl} onChange={(e) => setTtl(e.target.value)} required />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="telp">Nomer Telepon</label>
                <input type="tel" className="form-control form-control-sm" name="telp" id="telp" value={no_telp} onChange={(e) => setNoTelp(e.target.value)} required />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="telp">Nomer Telepon Orang Tua</label>
                <input type="tel" className="form-control form-control-sm" name="telp" id="telp" value={no_telp_ortu} onChange={(e) => setNoTelpOrtu(e.target.value)} required />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <div>
                <label htmlFor="alamat">Nama Orang Tua</label>
                <input type="textarea" className="form-control form-control-sm text-left" value={nama_ortu} onChange={(e) => setNamaOrtu(e.target.value)} required />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <div>
                <label htmlFor="alamat">Alamat</label>
                <input type="textarea" className="form-control form-control-sm text-left" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} required />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary" onClick={() => handleSubmitSiswa()}>Simpan</button>
        </div>
      </div>
    </Card>
  )
}