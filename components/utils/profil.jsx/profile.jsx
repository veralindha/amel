export default function Profile() {
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
                            <label htmlFor="inputStatus">Status</label>
                            <select id="inputStatus" className="form-control custom-select">
                                <option disabled>Select one</option>
                                <option>On Hold</option>
                                <option>Canceled</option>
                                <option selected>Success</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Project Description</label>
                            <textarea id="inputDescription" className="form-control" rows={4} defaultValue={"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr."} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputClientCompany">Client Company</label>
                            <input type="text" id="inputClientCompany" className="form-control" defaultValue="Deveint Inc" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputProjectLeader">Project Leader</label>
                            <input type="text" id="inputProjectLeader" className="form-control" defaultValue="Tony Chicken" />
                        </div>
                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>
    )
}