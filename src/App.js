import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Component/About';



function App() {

  const [input, setInput] = useState(""); 
  const [breweries, setBreweries] = useState([]); 
  const [noResult, setEmptyResult] = useState(false);
  

  const getBreweries = () => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
        .then((response) => response.json())
        .then((data) => {
                if (data.length < 1) {
                    setEmptyResult(true);
                }
                setBreweries(data); 
        })

        .catch((error) => {
            console.error(error.message);
            alert("No Data Found");
        });
};

    const handleClearingResults = () => {
        setBreweries([]);
        setEmptyResult(false);
        setInput("");
};

    const breweriesArr = breweries
        .sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        .map((brewery) => (
            <>
                <div
                    className='brewery'
                    key={brewery.id}
                >
                    <div className='brewery-title'>
                        <h3>{brewery.name}</h3>
                    </div>

                    <div className='brewery-title'>
                        <p className='lead'>
                            {`City: ${brewery.city}  State: ${brewery.state}  Street: ${brewery.street}
                            Phone: ${brewery.phone}  Website: ${brewery.website_url}`}
                        </p>
                    </div>
                </div>
            </>
        ));


  return (
  
    <div class="Site">

    <Header/>

    <Route exact path ="/About" component={About} />

    <main class="Site-content">
        <p> Brewery Search with Keyword</p>
        <div className='search-bar'>
            <div className='input'>
                <input
                    type='text'
                    value={input}
                    placeholder='Search breweries'
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    className='search-button'
                    id='search-button'
                    onClick={getBreweries}
                >
                    Search
                </button>

                <button
                    className='clear-result'
                    id='clear-button'
                    onClick={handleClearingResults}
                >
                    Clear
                </button>
            </div>
        </div>

        <div className='result'>
            <ul className='list'>{breweries && breweriesArr}</ul>

            {noResult === true && (
                <p className='no-result'>Nothing Found</p>
            )}
        </div>

    </main>

    <Footer/>

    </div>

  );
}

export default App;
