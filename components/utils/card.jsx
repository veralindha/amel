export default function Card({ children, cardIcon='', cardColor='' }) {
  return (
    <div className={`card bg-gradient-${cardColor}`}>
      <div className="card-header border-0">
        <h3 className="card-title">
          <i className={`far ${cardIcon}`} />
        </h3>
        <div className="card-tools">
          <button type="button" className={`btn btn-${cardColor} btn-sm`} data-card-widget="collapse">
            <i className="fas fa-minus" />
          </button>
        </div>
      </div>
      <div className="card-body pt-0">
        {children}
      </div>
    </div>

  )
}