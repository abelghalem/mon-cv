import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

type Props = {}

const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rebeccapurple',
    width: '100%',
    height: '45px',
    gap: '25px'
})

const MyNavLink = styled(NavLink)({
    margin: 'auto 0',
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    "&.active": {
        color: 'red'
    }
})

const NavBar = (props: Props) => {
  return (
    <Container>
        <MyNavLink to={'/home'}>Accueil</MyNavLink>
        <MyNavLink to={'/experiences'}>Expériences</MyNavLink>
        <MyNavLink to={'/formations'}>Formations</MyNavLink>
        <MyNavLink to={'/contact'}>Contact</MyNavLink>
    </Container>
  )
}

export default NavBar