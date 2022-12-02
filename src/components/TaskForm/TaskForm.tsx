function TaskForm(props) {
  const addNewTask = () => {
    props.addNewTask({
      id: 122,
      title: 'Написать тестовое задание',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugiat repellat architecto consequatur esse hic ratione placeat',
    })
  }

  return (
    <>
      <input
        onChange={() => {
          console.log('hi2')
        }}
      />
      <button onClick={addNewTask}>Add new task</button>
    </>
  )
}

export default TaskForm
