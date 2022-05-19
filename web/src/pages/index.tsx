
import { GetStaticProps } from 'next';
import Head from 'next/Head';
import { SubscripButton } from '../components/SubscripButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

// cliten-side
// server-side 
// static side generation 

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all publications <br/>
            <span>for {product.amount} month</span>
          </p>
          <SubscripButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding"/>
      </main>
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
