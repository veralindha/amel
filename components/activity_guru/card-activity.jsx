import { useEffect, useState } from "react"

export default function CardActivity({ nama = '', kegiatan = '', timestamps = '', image = '' }) {
  return (
    <>
      {/* timeline item */}
      <div>
        <i className="fas fa-user bg-blue" />
        <div className="timeline-item">
          <span className="time"><i className="fas fa-clock" /> {timestamps}</span>
          <h3 className="timeline-header"><a href="#">{nama}</a> Upload Activity</h3>
          <div className="timeline-body">
            <div className="mb-2" >
              <img src={image} alt="logimage" className="rounded" style={{ width: '20%', height: 'auto', position: 'relative' }}/>
            </div>
            {kegiatan}
          </div>
          <div className="timeline-footer">
            {/* <a className="btn btn-success btn-sm">Edit</a>
                        <a className="btn btn-danger btn-sm ml-2">Delete</a> */}
          </div>
        </div>
      </div>
    </>
  )
}