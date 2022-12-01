import React, { useState } from 'react'
import './Project.scss'

function Project() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Queue',
      items: [
        { id: 1, title: 'Написать тестовое задание' },
        { id: 2, title: 'Устроиться на работу' },
        { id: 3, title: 'Поесть' },
      ],
    },
    {
      id: 2,
      title: 'Development',
      items: [
        { id: 4, title: 'Не сдаваться' },
        { id: 5, title: 'Поприседать' },
        { id: 6, title: 'Вынести мусор' },
      ],
    },
    {
      id: 3,
      title: 'Done',
      items: [
        { id: 7, title: 'Закончить свой сайт' },
        { id: 8, title: 'Посмотреть уроки' },
        { id: 9, title: 'Учиться' },
      ],
    },
  ])

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

  return (
    <>
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
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default Project
