import { useState } from "react"
import Swal from "sweetalert2"
import Card from "../../components/utils/card"
import { supabase } from "../../libs/supabase.lib"

export default function EditActivity() {
    const [isUploading, setIsUploading] = useState(false)
    const [uploadMessage, setUploadMessage] = useState('Upload')
    const [fileName, setFileName] = useState('')
    const [kegiatan, setKegiatan] = useState('')
    const uploadImage = async (event) => {
        try {
            setIsUploading(true)
            setUploadMessage('Uploading...')
            if (!event.target.files || event.target.files.length == 0) {
                throw new Error('Anda harus memilih satu gambar untuk diunggah!')
            }
            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Date.now()}-username.${fileExt}`
            const filePath = `${fileName}`
            setFileName(filePath)
            let { error: uploadError } = await supabase.storage.from('log-siswa-images').upload(filePath, file, { upsert: true })
            if (uploadError) throw uploadError
            setUploadMessage('Upload completed!')
        } catch (error) {
            Swal.fire('Error', 'Error while uploading image file!', 'error')
            console.error(error)
        } finally {
            setIsUploading(false)
        }
    }
    const handleCreateLog = async (e) => {
        e.preventDefault()
        const newLog = {
            nama: 'siswa',
            kegiatan: kegiatan,
            createdAt: new Date(Date.now()).toISOString(),
            image: fileName
        }
        let { data, error } = await supabase.from('LogSiswa').insert(newLog).select()
        if (error) {
            console.error(error)
        } else {
            Swal.fire('Success', 'Log berhasil ditambahkan!', 'info')
            console.info(data)
        }
    }
    return (
        <Card cardTitle="Aktivitas Baru" cardIcon="fa-clock">
            <form onSubmit={handleCreateLog}>
                <div className="form-group">
                    <label>Kegiatan</label>
                    <textarea class="form-control" rows="3" placeholder="Enter ..." value={kegiatan} onChange={(e) => setKegiatan(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputFile">Pilih File</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="exampleInputFile" onChange={uploadImage} disabled={isUploading}/>
                            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text">{uploadMessage}</span>
                        </div>
                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        <i className="fas fa-upload" /> Upload</button>
                </div>
            </form >
        </Card>
    )
}