import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav flex uppercase'>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'mr-5 border-b-2 border-mainblue pb-2.5 hover:border-hoverblue dark:hover:border-white'
            : 'mr-5 pb-2.5 hover:border-b-2'
        }
      >
        home
      </NavLink>

      <NavLink
        to={'/graphi'}
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-mainblue pb-2.5 hover:border-hoverblue dark:hover:border-white'
            : 'pb-2.5 hover:border-b-2'
        }
      >
        graphiql
      </NavLink>
    </nav>
  )
}