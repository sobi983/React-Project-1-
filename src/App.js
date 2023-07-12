import Navbar from './components/navbar'
import Content from './components/content'
import data from './content-data'

function App() {

  const content = data.map(function (items) {
    return (
      <Content
        items={items}
      />
    )
  })

  return (
    <div className='container font-popins relative left-0'>
      <Navbar />
      <section>
        {content}
      </section>
    </div>
  );
}

export default App;
