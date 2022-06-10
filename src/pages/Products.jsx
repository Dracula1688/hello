import Hero from "../components/Hero"
import Product from './../components/Product';

const Products = () => {
  return (
    <>
    <Hero 
      title={'Barcha maxsulotlar'} 
      description={'bizni saytimizdan foydalanganingiz uchun rahmat'} 
      bg={'#f00'}
    />  
    <Product />
    </>
  )
}

export default Products