import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <div className='md:h-screen md:mt-0 mt-32' id="features">
        <div className='md:text-5xl text-3xl font-extrabold text-center md:mb-20 mb-10'>Features</div>
        <div><FeaturesCard/></div>
    </div>
  )
}

export default Features