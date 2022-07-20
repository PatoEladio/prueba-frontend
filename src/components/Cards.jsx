
const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.imageSrc} className="border-bottom" height={props.imgHeight} />
      <div className="card-body">
        <div className="card-title">
          {props.title}
        </div>
        <div className="card-text">{props.body}</div>
      </div>
    </div>
  )
}

export default Cards
