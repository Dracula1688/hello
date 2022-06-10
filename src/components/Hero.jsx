import './all.css';

const Hero = ({title, description, bg}) => {
  return (
    <div className='hero' style={{background: `${bg}`}}>
        <div className="container">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Hero