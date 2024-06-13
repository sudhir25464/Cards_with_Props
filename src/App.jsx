import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  const cards = [
    { id: 1, username: 'User 1', btnText: 'Go Back' },
    { id: 2, username: 'User 2', btnText: 'follow me' },
    { id: 3, username: 'User 3', btnText: 'Visit' },
    { id: 4, username: 'User 4', btnText: 'Click me ' },
    { id: 3, username: 'User 3', btnText: 'Visit' },
    { id: 4, username: 'User 4', btnText: 'Visite' },
    // Add more cards as needed
  ];

  // const myObject = {
  //   name:"sudhir singh",
  //   age:20,
  //   address:"pune",
  // }

  return (
    <>

<h2 className="bg-green-400 text-black p-4 rounded-xl mb-3 font-bold text-2xl">Collection of Cards</h2>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto gap-4 '>

{
  cards.map((card) => (
    <Card key={card.id} username={card.username} btnText={card.btnText} />
  ))
}

{/* <Card  usename="sudhir singh" myObj = {myObject}/>
<Card  usename="sudhir singh" btnText="Next" />
<Card  usename="sudhir singh" btnText="follow me" />
<Card/> */}

</div>
    </>
  )
}

export default App
