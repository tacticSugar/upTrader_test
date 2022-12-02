import Project from '../Project/Project'
import ProjectForm from '../ProjectForm/ProjectForm'

function ProjectList(props) {
  const { projects } = props

  return (
    <div className="">
      <ProjectForm />
      {!projects.length && <h2>Project list is empty</h2>}
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
