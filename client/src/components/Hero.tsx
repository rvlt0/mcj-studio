const Hero = () => {
  return (
    <>
      <div id="hero"></div>
      <div className="flex p-20 flex-col items-center justify-center py-20" >
        <h1 className="py-10 text-6xl font-newsreader">Inovação e tecnologia para um futuro melhor.</h1>
        <a href="#sites">
          <button className="shadow-xl border bg-indigo-400 hover:shadow-indigo-500/40 w-fit p-2 px-10 rounded bg-black text-white">Saiba mais</button>
        </a>
      </div>
    </>
  )
}

export default Hero
