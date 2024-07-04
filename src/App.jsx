import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardData from './data'

function App() {
  const cardEl = CardData.map(card => {
    return <Card 
                key={card.id}
                {...card}
            />
  })

  return (
    <>
      <Navbar />
      <section className="Cards">
         {cardEl}
      </section>
    </>
  )
}

export default App
