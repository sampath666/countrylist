import './index.css'

const Flagcard = props => {
  const {data, onRemoveVisited} = props
  const {imageUrl, name, id} = data

  const onRemove = () => onRemoveVisited(id)

  return (
    <li className="d3">
      <img src={imageUrl} alt="thumbnail" className="img3" />
      <div className="d4">
        <p className="p3">{name}</p>
        <button className="b2" type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default Flagcard
