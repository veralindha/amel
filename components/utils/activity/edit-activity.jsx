export default function EditActivity() {
    return (
        <div className="card card-primary">
            {/* /.card-header */}
            {/* form start */}
            <form>
                <div className="card-body">
                    <div className="form-group">
                        <label>Kegiatan</label>
                        <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Pilih File</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="exampleInputFile" />
                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text">Upload</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        <i className="fas fa-upload" /> Upload</button>
                </div>
            </form >
        </div >

    )
}