import { useEffect, useState } from "react"
import { supabase } from "../../libs/supabase.lib"

export default function TableSiswa() {
  const [dataSiswa, setDataSiswa] = useState([])
  const [search, setSearch] = useState('')
  const searchedData = dataSiswa.filter((siswa) => siswa.nama_siswa.toLowerCase().includes(search.toLowerCase()))
  const fetchSiswa = async () => {
    let{data, error} = await supabase.from('DataSiswa').select('*, Dudi(nama_dudi)')
    if (error) {
      console.error(error)
    } else {
      setDataSiswa(data)
    }
  }
  useEffect(() => {
    fetchSiswa()
  })
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tabel Siswa</h3>
                <div className="card-tools">
                  <div className="input-group input-group-sm" style={{ width: 150 }}>
                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead className="">
                    <tr>
                      <th>NISN</th>
                      <th>Nama</th>
                      <th>Jurusan</th>
                      <th>DUDI</th>
                      <th>Deskripsi Bidang</th>
                      <th>Alamat</th>
                      <th>Telpon</th>
                      <th>TTL</th>
                      <th>Orang Tua</th>
                      <th>Telpon Orang Tua</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchedData.map((siswa, i) => (
                      <tr key={i}>
                        <td>{siswa.nisn}</td>
                        <td>{siswa.nama_siswa}</td>
                        <td>{siswa.jurusan}</td>
                        <td>{siswa.Dudi.nama_dudi}</td>
                        <td>{siswa.deskripsi}</td>
                        <td>{siswa.alamat}</td>
                        <td>{siswa.no_telp}</td>
                        <td>{siswa.ttl}</td>
                        <td>{siswa.nama_ortu}</td>
                        <td>{siswa.no_telp_ortu}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </div>
    </div>
  )
}