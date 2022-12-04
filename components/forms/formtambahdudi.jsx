import { useState } from "react"
import { supabase } from "../../libs/supabase.lib"
import Swal from "sweetalert2"
import Card from "../utils/card"

export default function TambahDataDudiForm() {
  const [namaDudi, setNamaDudi] = useState('')
  const [email, setEmail] = useState('')
  const [alamat, setAlamat] = useState('')
  const [notelp, setNoTelp] = useState('')
  const clearInput = () => {
    setNamaDudi('')
    setAlamat('')
    setNoTelp('')
    setEmail('')
  }
  const signUpDudi = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    })
    if (error) {
      Swal.fire('Error', 'Failed while registering new DUDI!', 'error')
      console.error(error)
    } else {
      console.info('registered')
    }
  }
  const handleCreateUser = async () => {
    const userdata = {
      email: email,
      username: namaDudi.replace(' ', '_').toLowerCase(),
      password: namaDudi.replace(' ', '_').toLowerCase(),
      role: 'dudi'
    }
    let { data, error } = await supabase.from('User').insert(userdata).select();
    if (error) {
      Swal.fire('Error', 'Error while creating user data!', 'error')
      return null
    } else {
      return data
    }
  }
  const handleSubmitDudi = async (e) => {
    e.preventDefault()
    const userdata = await handleCreateUser()
    if (!userdata) {
      return Swal.fire('Error', 'Cannot create DUDI data!', 'error')
    }
    const inputdata = {
      nama_dudi: namaDudi,
      alamat: alamat,
      no_telp: notelp,
      userId: userdata ? userdata[0].id : null
    }
    let { data, error } = await supabase.from('Dudi').insert(inputdata).select()
    if (error) {
      Swal.fire('Error', 'Error while saving data!', 'error')
    } else {
      Swal.fire('Success', 'Data tersimpan!', 'success')
      signUpDudi(email, email)
      clearInput()
    }
  }

  return (
    <Card cardTitle="DUDI" cardIcon="fa-user">
      <div className="container-fluid">
        <form onSubmit={handleSubmitDudi}>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <label htmlFor="exampleInputName1">Nama DUDI</label>
                  <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={namaDudi} onChange={(e) => setNamaDudi(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="exampleInputName2">Email Aktif</label>
                  <input type="email" className="form-control form-control-sm text-left" id="exampleInputName2" value={email} onChange={(e) => setEmail(e.target.value)} required />
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