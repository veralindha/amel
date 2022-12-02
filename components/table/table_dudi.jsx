import { useEffect, useState } from "react"
import {supabase} from "../../libs/supabase.lib"

export default function TableDudi() {
  const [dataDudi, setDataDudi] = useState([])
  const [search, setSearch] = useState('')
  const searchedData = dataDudi.filter((dudi) => dudi.nama_dudi.toLowerCase().includes(search.toLowerCase()))
  const fetchDudi = async () => {
    let {data, error} = await supabase.from('Dudi').select()
    if (error) {
      console.error(error)
    } else {
      setDataDudi(data)
    }
  }
  useEffect(() => {
    fetchDudi()
  })
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tabel DUDI</h3>
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
                      <th>Nama DUDI</th>
                      <th>No Telp</th>
                      <th>Alamat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchedData.map((dudi, i) => (
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{dudi.nama_dudi}</td>
                        <td>{dudi.no_telp}</td>
                        <td>{dudi.alamat}</td>
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