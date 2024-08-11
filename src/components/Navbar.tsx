import { NavLink } from "react-router-dom"

const Navbar = () => {

  const linkClass = ({isActive} : {isActive: boolean}) : string => {
    const classes = "text-white rounded-md px-3 py-2"
    return isActive
      ? classes + ' bg-cyan-950'
      : classes + ' bg-cyan-700 hover:bg-cyan-900'
  }

  return (
    <>
      <nav className='bg-white-100 p-4'>
        <div className='container mx-auto'>
          <ul className="flex justify-center space-x-4">
              <li><NavLink to='/' className={linkClass}>About</NavLink></li>
              <li><NavLink to='/projects' className={linkClass}>Projects</NavLink></li>
              <li><NavLink to='/blog' className={linkClass}>Blog</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar