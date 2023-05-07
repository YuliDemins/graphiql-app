import { themeActions, useActionCreators, useAppSelector } from '@root/src/store'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Toggle } from '@/components'

export const Header = () => {
  const isDark = useAppSelector((state) => state.theme.isDark)
  const actions = useActionCreators(themeActions)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handlerDark = () => {
    actions.setIsDark({ isDark: !isDark })
  }

  return (
    <header className='mx-auto mb-8 flex w-full max-w-screen-xl justify-between'>
      <Nav />

      <div className='settings'>
        <Toggle onClick={handlerDark} />
      </div>
      <div className='flex gap-7'>
        <NavLink
          to={'/signin'}
          className='login-button button-hover bg-mainblue text-center text-white dark:bg-lightblue dark:text-darkblue'
        >
          Sign in
        </NavLink>
        <NavLink
          to={'/signup'}
          className='login-button button-hover text-center'
        >
          Sign up
        </NavLink>
      </div>
    </header>
  )
}
