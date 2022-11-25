export default function ContentHeader({ title, listBreadcrumb }) {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              {listBreadcrumb.map((breadcrumb, i) => (
                breadcrumb.isActive ? <li key={i} className="breadcrumb-item active">{breadcrumb.text}</li> : <li key={i} className="breadcrumb-item"><a href={breadcrumb.url}>{breadcrumb.text}</a></li> 
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}