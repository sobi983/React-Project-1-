import NavBar from './components/navbar';
import Content from './components/content';
// import Props from './components/props';
import Reviews from './components/reviews'
import reviewInformation from './data/data-reviews'


function App() {
  const cards = reviewInformation.map(function (items) {
    return (
      <Reviews
        key={items.id}
        //shorthand for sending props
        items ={items}

        //long way to send props over
        // img={items.coverImg}
        // reviewCount={items.stats.reviewCount}
        // rating={items.stats.rating}
        // local={items.location}
        // title={items.title}
        // price={items.price}
        // openSpots={items.openSpots}
      />)
  })


  return (
    <div className='mainbg--sel'>
      <div className='maindiv--sel'>
        <NavBar />
        <Content />
        <section className='sec--sel'>
          {cards}
        </section>
      </div>
    </div>
  );
}

export default App;












{/* <Props
  name="Fluffy cat"
  phoneNumber="03125419535"
  email='fluffy@gmail.com'
/>

<Props
  name="Persian cat"
  phoneNumber="03329840486"
  email='persian@gmail.com'
/> */}