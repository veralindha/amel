import { useState } from "react"
import Swal from "sweetalert2"
import {supabase} from "../../libs/supabase.lib"

export default function EditActivity() {
    const [isUploading, setIsUploading] = useState(false)
    const uploadImage = async (event) => {
        try {
            setIsUploading(true)
            if(!event.target.files || event.target.files.length == 0){
                throw new Error('Anda harus memilih satu gambar untuk diunggah!')
            }
            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `20221202-username.${fileExt}`
            const filePath = `${fileName}`
            let { error: uploadError } = await supabase.storage.from('log-guru-images').upload(filePath, file, {upsert: true})
            if(uploadError) throw uploadError
            
        } catch (error) {
            Swal.fire('Error', error, 'error')
            console.error(error)
        } finally {
            setIsUploading(false)
        }
    }
    return (
        <div className="card card-primary">
            {/* /.card-header */}
            {/* form start */}
            <form>
                <div className="card-body">
                    <div className="form-group">
                        <label>Kegiatan</label>
                        <textarea className="form-control" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">Pilih File</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept="image/*" onChange={uploadImage} disabled={isUploading}/>
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