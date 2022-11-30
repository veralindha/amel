export default function ProfileGuru() {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="card card-primary">
                    <div className="card-body" style={{ display: 'block' }}>
                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" id="inputName" className="form-control" defaultValue="AdminLTE" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">NIP</label>
                            <input type="number" id="inputName" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Alamat</label>
                            <textarea id="inputDescription" className="form-control" rows={4} defaultValue={"RT 01"} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputProjectLeader">Nomer Telepon</label>
                            <input type="number" id="inputProjectLeader" className="form-control" defaultValue="Tony Chicken" />
                        </div>
                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>
    )
}