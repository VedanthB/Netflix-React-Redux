import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Row from '../components/Row';
import requests from '../Requests';

function HomeScreen() {
    return (
        <div className='homeScreen'> 
             {/* nav */}
             <Nav />
           

             {/* banner */}
             <Banner />


             {/* row */}
             <Row 
              title='Netflix Originals'
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
             />
             <Row   title='Trending Now'
              fetchUrl={requests.fetchTrending}/>
              <Row   title='Top Rated'
              fetchUrl={requests.fetchTopRated}/>
              <Row   title='Comedy Movies'
              fetchUrl={requests.fetchComedyMovies}/>
              <Row   title='Horror Movies'
              fetchUrl={requests.fetchHorrorMovies}/>
              <Row   title='Documentries'
              fetchUrl={requests.fetchDocumentaries}/>

        </div>
    )
}

export default HomeScreen
