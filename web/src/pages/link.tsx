
import { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';
const WebView = require('react-electron-web-view');

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

// cliten-side
// server-side 
// static side generation 

export default function Link({ product }: HomeProps) {
  return (
    <>
        <WebView src="https://cursounhasdefibra.com.br/" />
    </>
  )
}

//export const getServerSideProps: GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1IZ2mkGQXTBLLSCqnyF1M85J', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return{
    props: {
      product,
    },
    revalidate: 60*60*24, // 24 horas
  }
};
