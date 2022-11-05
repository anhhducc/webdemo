import React from 'react'
import { Button, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{margin: '30px 70px '}}>
      <h1 style={{margin: '30px'}}>WELCOME TO OUR WEBSITE</h1>
      <h2>Nhom 11</h2>
      <Image style={{width: '200px', borderRadius:'15px', marginBottom: "10px"}} src='https://static.vecteezy.com/system/resources/previews/005/294/064/original/cute-red-panda-cartoon-icon-illustration-animal-flat-cartoon-style-free-vector.jpg'></Image>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod dicta a aliquid quis explicabo natus. Doloremque fuga ab nobis accusamus laboriosam veniam, dolorem quaerat maxime quidem sequi natus soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod dicta a aliquid quis explicabo natus. Doloremque fuga ab nobis accusamus laboriosam veniam, dolorem quaerat maxime quidem sequi natus soluta.</p>

      <Button style={{backgroundColor: '#FF9933'}}> get Started!</Button>
    </div>
  )
}

export default Home