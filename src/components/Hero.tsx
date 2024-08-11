interface Props {
    title: string,
}

const Hero = ({title}: Props) => {
  return (
    <div>{title}</div>
  )
}

export default Hero