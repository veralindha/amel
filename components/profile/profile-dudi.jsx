import Card from '../../components/utils/card'
export default function ProfileDudi() {
    return (
        <section className="content">
            <Card cardTitle="Profile" cardIcon="fa-user">
                <div className="container-fluid">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <div>
                                    <label htmlFor="exampleInputName1">Nama DUDI</label>
                                    <input type="text" className="form-control form-control-sm text-left" id="exampleInputName1" value={'namaDudi'} onChange={(e) => setNamaDudi(e.target.value)} required />
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
                        <button className="btn btn-primary" onClick={() => handleSubmitDudi()}>Simpan</button>
                    </div>
                </div>
            </Card>
        </section>
    )
}