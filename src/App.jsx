import Review from "./components/review"

function App() {


  return (
    <main className='flex flex-col justify-center items-center bg-slate-300 min-h-screen gap-10'>
      <h1 className="underline underline-offset-2 decoration-slate-600 font-semibold text-3xl">Our Reviews</h1>

      <section className='bg-white w-6/12 p-3 flex flex-col items-center gap-4 hover:shadow-2xl transition duration-700'>
        <Review />
      </section>

    </main>
  )
}

export default App
