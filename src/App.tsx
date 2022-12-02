import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.scss'

import ProjectBoards from './components/Boards/Boards'
import ProjectForm from './components/ProjectForm/ProjectForm'
import ProjectList from './components/ProjectList/ProjectList'

function App(props) {
  console.log(props)
  const [projects, setProjects] = useState([])

  const addProjectHandler = (title) => {
    const newProject = {
      title: title,
      id: uuidv4(),
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="app">
      <ProjectForm addProject={addProjectHandler} />
      <ProjectList projects={projects} />
      <ProjectBoards />
    </div>
  )
}

export default App

// const mapStateToProps = (state) => {
//   return state
// }

// export default function connect(mapStateToProps)(App)
