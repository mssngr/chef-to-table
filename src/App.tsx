import React from 'react'
import styled from 'styled-components'
import 'minireset.css'
import 'sanitize.css'

import './app.css'
import Input, { InputGroup } from './components/Input'

import logo from './assets/images/logo.png'
import food from './assets/images/food.jpg'
import steps from './assets/images/steps.jpg'
import mail from './assets/images/mail.png'
import footer from './assets/images/footer.jpg'

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 3rem;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 18px;

  & > *:not(:last-child) {
    margin-right: 45px;
  }
`

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  white-space: nowrap;
`

const Splash = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 690px;
  padding-top: 150px;
  padding-right: 60px;
  background: no-repeat center/cover url(${food});
`

const Box = styled.div`
  flex-grow: 0;
  background-color: white;
  width: 420px;
  height: 600px;
  padding: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 0;

  & > *:not(:last-child) {
    margin-bottom: 18px;
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    margin: 0 15px;
  }

  hr {
    flex: 1;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  height: 768px;
  padding: 90px;
  background-color: white;

  h1,
  h2 {
    margin: 0;
  }
`

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
`

const StepsImage = styled.img`
  width: 100%;
`

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 0 5rem;
  background-color: white;
`

const Container3 = styled.div`
  width: 100%;
  height: 26rem;
`

class Topbar extends React.Component {
  render() {
    return (
      <Bar>
        <a href="/">
          <img src={logo} />
        </a>
        <nav>
          <Menu>
            <li>
              <NavLink href="#">How it Works</NavLink>
            </li>
            <li>
              <NavLink href="#">Chefs</NavLink>
            </li>
            <li>
              <NavLink href="#">Help</NavLink>
            </li>
            <li>
              <NavLink href="#">Sign In</NavLink>
            </li>
            <li>
              <NavLink href="#">Sign Up</NavLink>
            </li>
          </Menu>
        </nav>
      </Bar>
    )
  }
}

class SearchBox extends React.Component {
  render() {
    return (
      <Box>
        <h1 style={{ marginTop: 0 }}>Your chef awaits</h1>
        <p>Saying something here. Saying something profound.</p>
        <Form>
          <Input prefix="Near" prefixPadding="3rem" value="Denver" readOnly />
          <InputGroup>
            <Input type="date" />
            <Input type="time" />
          </InputGroup>
          <select id="partySize">
            <option value={undefined} selected>
              Party Size
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <Divider>
            <hr />
            <span>or search by cuisine (optional)</span>
            <hr />
          </Divider>
          <Input placeholder="Find italian, seafood, filets..." />
          <button type="submit">Search</button>
        </Form>
      </Box>
    )
  }
}

class Galleries extends React.Component {
  render() {
    return (
      <Container>
        <Gallery>
          <h1>Top Chefs in Denver</h1>
          <h2>See All ></h2>
        </Gallery>
      </Container>
    )
  }
}

class NewsletterSignup extends React.Component {
  render() {
    return (
      <Container2>
        <img src={mail} />
        <h2>Wanna be the first to know when we are in your city?</h2>
        <input type="email" placeholder="Email" />
      </Container2>
    )
  }
}

class Footer extends React.Component {
  render() {
    return <Container3 />
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Topbar />
        <Splash>
          <SearchBox />
        </Splash>
        <Galleries />
        <StepsImage src={steps} />
        <NewsletterSignup />
        <Footer />
      </div>
    )
  }
}
