import { useState } from 'react'
import './ProjectForm.scss'

function ProjectForm(props) {
  const { addProject } = props
  const [title, setTitle] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addProject(title)
    setTitle('')
  }

  return (
    <div className="projectFormContainer">
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Name new project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" title="Submit">
          Create
        </button>
      </form>
    </div>
  )
}

export default ProjectForm
