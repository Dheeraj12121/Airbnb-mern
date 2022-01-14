import Head from 'next/head'
import MediumCard from '../components/MediumCard'
import Header from '../components/Header'  
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import Api from '../components/Api'
import Footer from '../components/Footer'

export default function Home({exploreData,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>      
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore Nearby  
          </h2>
          {/* Pull some data from aserver -API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({img,distance,location})=> (
            <SmallCard 
            key={img}
            img={img}
            distance={distance}
            location={location}
            />            
          ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 '>
          {/* Sonny method */}
          {Api?.map(({img,title}) =>{
            return(
              <MediumCard 
              // key={img}
              img={img}
              title={title}
            />
            )
          })}

          {/* thapa method  */}
          {/* {Api.map(data)} */}
          </div>
        </section>

        <LargeCard
          img={`https://images.unsplash.com/photo-1514930228629-e8a7034abd17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80`}
          title={'The Greatest Outdoor'}
          description={'Whishlist created by Airbnb'}
          buttonText={'Get Inspired'}
        />
      </main>
      
      <Footer/>
    </div>
    
  );
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  // const cardsData = await fetch('../components/Api.js').then(
  //  (res) => res.json()
  // );
  return{
    props:{
      exploreData,
      // cardsData
    },
  };

}
