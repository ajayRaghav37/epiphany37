import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Discover epiphany 37 times.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:ajay.raghav@hotmail.com?subject=I love epiphany37&body=I find it specially interesting because"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Send us love
            </a>
            <a
              href="mailto:ajay.raghav@hotmail.com?subject=Opinion on epiphany37&body=I would like to have your opinion and analysis on the following subject"
              className="mx-3 font-bold hover:underline"
            >
              Ask for opinion
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
