import Card from "../utils/card"

export default function ProfileGuru() {
    return (
        <section className="content">
            <Card cardTitle="Profile" cardIcon="fa-user">
                <div className="container-fluid">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <label htmlFor="exampleInputName1">Nama Guru</label>
                                    <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={'nama'} onChange={(e) => setNama(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <label htmlFor="exampleInputName2">NIP</label>
                                    <input type="text" className="form-control form-control-sm text-left text-left" id="exampleInputName2" value={'nip'} onChange={(e) => setNip(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-8">
                                <div>
                                    <label htmlFor="alamat">Alamat</label>
                                    <input type="textarea" className="form-control form-control-sm text-left" value={'alamat'} onChange={(e) => setAlamat(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <label htmlFor="alamat">Telpon</label>
                                    <input type="tel" className="form-control form-control-sm text-left" value={'notelp'} onChange={(e) => setNoTelp(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-primary" onClick={() => handleSubmitGuru()}>Simpan</button>
                    </div>
                </div>
            </Card>
        </section>
    )
}