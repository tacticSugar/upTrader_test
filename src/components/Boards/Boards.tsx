import React, { useState } from 'react'
import { data } from '../../data/data'
import TaskForm from '../TaskForm/TaskForm'
import './Boards.scss'

function Boards() {
  const [boards, setBoards] = useState(data)

  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHandler(e) {
    e.preventDefault()
    if (e.target.className == 'item') {
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board)
    setCurrentItem(item)
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dropHandler(e, board, item) {
    e.preventDefault()
    e.stopPropagation()
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex + 1, 0, currentItem)
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board
        }

        if (b.id === currentBoard.id) {
          return currentBoard
        }

        return b
      })
    )
    e.target.style.boxShadow = 'none'
  }

  function dropCardHandler(e, board) {
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board
        }

        if (b.id === currentBoard.id) {
          return currentBoard
        }

        return b
      })
    )
    e.target.style.boxShadow = 'none'
  }

  function addNewTaskHandler(item) {
    const newItems = boards[0].items
    newItems.push(item)
    const newQueue = boards[0]
    newQueue.items = newItems
    setBoards([newQueue, ...boards.slice(1)])
  }

  return (
    <div className="board-container">
      <TaskForm addNewTask={addNewTaskHandler} />
      {boards.map((board) => (
        <div
          className="board"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
        >
          <div className="board__title">{board.title}</div>
          {board.items.map((item) => (
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              className="item"
              draggable={true}
            >
              <h1 className="item__title">{`${
                item.id + '. ' + item.title
              }`}</h1>
              <p className="item__description">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Boards
