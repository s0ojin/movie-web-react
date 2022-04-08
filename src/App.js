import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //const [top, setTop] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
    .then(response => response.json())
    .then(json=>{
      setCoins(json);
     // setTop(json.slice[0,100]);
      setLoading(false);
    });
  },[])
  return (
      <div>
        <h1>The coins! ({coins.length})</h1>
        {loading ? <strong>Loading...</strong> :
          <select>
            {coins.map(coin=>
            <option key={coin.id}>{coin.name} ({coin.symbol}) {(Math.round(coin.quotes.KRW.price)).toLocaleString()} KRW</option>
            )}
          </select>
        }
        <h2>실시간 TOP100</h2>
        <ol>
        {coins.map(coin=>
            <li key={coin.id}>{coin.name} ({coin.symbol}) {(Math.round(coin.quotes.KRW.price)).toLocaleString()} KRW</li>
            )}
        </ol>
      </div>
  )
}
export default App;
