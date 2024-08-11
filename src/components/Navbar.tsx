import { NavLink } from "react-router-dom"

const Navbar = () => {

  const linkClass = ({isActive} : {isActive: boolean}) : string => {
    return isActive
      ? 'bg-stone-500'
      : ''
  }

  return (
    <>
      <h2>Navbar</h2>
      <div>
        <ul>
          <li><NavLink className={linkClass} to="/">Link to About</NavLink></li>
          <li><NavLink className={linkClass} to="/projects">Link to Projects</NavLink></li>
          <li><NavLink className={linkClass} to="/blog">Link to Blog</NavLink></li>
        </ul>
      </div>
    </>

  )
}

export default Navbar