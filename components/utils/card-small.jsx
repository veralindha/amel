export default function SmallCard({ title, caption, icon, background }) {
  return (
    <div className={"small-box " + background}>
      <div className="inner">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
      <div className="icon"><i className={"ion " + icon} /></div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  )
}