import { useState } from "react"
import Swal from "sweetalert2"
import { supabase } from "../../libs/supabase.lib"
import Card from "../utils/card"

export default function TambahDataGuruForm() {
  const [nama, setNama] = useState('')
  const [nip, setNip] = useState('')
  const [email, setEmail] = useState('')
  const [alamat, setAlamat] = useState('')
  const [notelp, setNoTelp] = useState('')
  const clearInput = () => {
    setNama('')
    setNip('')
    setAlamat('')
    setNoTelp('')
    setEmail('')
  }
  const signUpGuru = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    })
    if (error) {
      Swal.fire('Error', 'Failed while registering new Guru!', 'error')
      console.error(error)
    } else {
      console.info('registered')
    }
  }
  const handleCreateUser = async () => {
    const userdata = {
      email: email,
      username: nip,
      password: nip,
      role: 'guru'
    }
    let { data, error } = await supabase.from('User').insert(userdata).select();
    if (error) Swal.fire('Error', 'Error while creating user data!', 'error')
    else return data
  }
  const handleSubmitGuru = async (e) => {
    e.preventDefault()
    const userdata = await handleCreateUser()
    const inputdata = {
      nip: nip,
      nama_guru: nama,
      alamat: alamat,
      no_telp: notelp,
      userId: userdata ? userdata[0].id : null
    }
    let { data, error } = await supabase.from('DataGuru').insert(inputdata).select()
    if (error) {
      Swal.fire('Error', 'Error while saving data!', 'error')
    } else {
      Swal.fire('Success', 'Data tersimpan!', 'success')
      signUpGuru(email, email)
      clearInput()
    }
  }
  return (
    <Card cardTitle="Guru" cardIcon="fa-user">
      <div className="container-fluid">
        <form onSubmit={handleSubmitGuru}>
          <div className="form-group">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <label htmlFor="exampleInputName1">Nama Guru</label>
                  <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={nama} onChange={(e) => setNama(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="exampleInputName2">NIP</label>
                  <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" value={nip} onChange={(e) => setNip(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="exampleInputName3">Email Aktif</label>
                  <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName3" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-8">
                <div>
                  <label htmlFor="alamat">Alamat</label>
                  <input type="textarea" className="form-control form-control-sm text-left" value={alamat} onChange={(e) => setAlamat(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <label htmlFor="alamat">Telpon</label>
                  <input type="tel" className="form-control form-control-sm text-left" value={notelp} onChange={(e) => setNoTelp(e.target.value)} required />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <button className="btn btn-primary">Simpan</button>
          </div>
        </form>
      </div>
    </Card>
  )
}