import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from './components/Button'
import Products from './components/Products'
import Card from './components/card'
import List from './components/List'

function App() {
  const imgFashion='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933';
  const imgDark='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747';
  const camel='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437' ;

  return (
    <>
      <Navbar/>
      <Main/>
      <Button label='Traer información'/>
      <Button label='Enviar información'/>
      <Products
      img={imgFashion}
      name='Fashion'
      description= 'Tennis Fitness Running Purple'
      price='$1958'
      />
      <Products
        img={imgDark}
        name='Dark'
        description='Tennis Dark Running'
        price='$2296'
      />
      <Products
        img={camel}
        name='Camel'
        description='Casual tennis'
        price= '$3431'
      />
      <Products
        img={imgDark}
        name='Dark-grey'
        description='Tennis Dark-Grey'
        price= '$2300'
      />

      {/*Aqui irá mi componente de MUI y JoyUI */}
      <Card/> <br /><br />
      <List/>
    </>
  )
}

export default App
