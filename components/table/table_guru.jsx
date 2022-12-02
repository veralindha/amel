import { useEffect, useState } from "react"
import { supabase } from "../../libs/supabase.lib"

export default function TableGuru() {
  const [dataGuru, setDataGuru] = useState([])
  const [search, setSearch] = useState('')
  const searcedData = dataGuru.filter((guru) => guru.nama_guru.toLowerCase().includes(search.toLowerCase()))
  const fetchGuru = async () => {
    let { data, error } = await supabase.from('DataGuru').select();
    if (error) {
      console.error(error)
    } else {
      setDataGuru(data)
    }
  }

  useEffect(() => {
    fetchGuru()
  })
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tabel Guru</h3>
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
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Nama</th>
                      <th>NIP</th>
                      <th>No Telp</th>
                      <th>Alamat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searcedData.map((guru, i) => (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{guru.nama_guru}</td>
                        <td>{guru.nip}</td>
                        <td>{guru.no_telp}</td>
                        <td>{guru.alamat}</td>
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