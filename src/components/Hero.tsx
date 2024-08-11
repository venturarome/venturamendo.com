interface Props {
    title: string,
    subtitle?: string
}

const Hero = ({title, subtitle}: Props) => {
  return (
    <>
      <section className="bg-cyan-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-semibold py-2">{title}</h1>
            {subtitle ? <p className="text-xl py-2">{subtitle}</p> : null}
        </div>
      </section>
    </>
    
    
  )
}

export default Hero