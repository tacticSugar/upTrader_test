function Task(props) {
  return (
    <div>
      <h1 className="item__title">{`${item.id + '. ' + item.title}`}</h1>
      <p className="item__description">{item.description}</p>
    </div>
  )
}

export default Task
