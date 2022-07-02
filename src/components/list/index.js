import './index.css'

const List = props => {
  const {data, onAddVisited} = props

  const {name, isVisited, id} = data

  const onChangeId = () => onAddVisited(id)

  return (
    <li className="d2">
      <p className="p1">{name}</p>
      {isVisited ? (
        <p className="b12">visited</p>
      ) : (
        <button type="button" className="b1" onClick={onChangeId}>
          visit
        </button>
      )}
    </li>
  )
}

export default List
