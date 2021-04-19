import React from 'react'
import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { World } from '../icons'

import styles from './navigation.module.css'

const Navigation = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <World />
        <span>PRO-Diaries</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <span>Badges</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <span>Students</span>
      </NavItem>

      <NavItem href="https://dbms-group5.github.io/main/#about">
        <span>ABOUT US</span>
      </NavItem>

    </nav>
  )
}

export default Navigation
