import ContentHeader from "../utils/content-header"
import TambahDataSiswaForm from "../forms/formtambahsiswa"
import TambahDataGuruForm from "../forms/formtambahguru"
import TambahDataDudiForm from "../forms/formtambahdudi"
import { useState } from "react"

export default function TambahDataContents() {
  const [tipe, setTipe] = useState('')
  const breadcrumbs = [
    {
      isActive: false,
      text: 'Admin',
      url: '#'
    },
    {
      isActive: true,
      text: 'Tambah Data',
      url: '#'
    },
  ]
  return (
    <div className="">
      <ContentHeader title={'Tambah Data'} listBreadcrumb={breadcrumbs} />
      <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <TambahDataSiswaForm />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}