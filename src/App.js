import React, {useEffect, useState} from "react"
import CryptoTable from "./components/CryptoTable"
import PriceChart from "./components/PriceChart"
import "./App.css"

function App(){

const [coins,setCoins] = useState([])
const [selectedCoin,setSelectedCoin] = useState("bitcoin")

useEffect(()=>{

fetchCoins()

},[])

const fetchCoins = async () => {

const url =
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"

const res = await fetch(url)

const data = await res.json()

setCoins(data)

}

return(

<div className="container">

<h1>Crypto Market Dashboard</h1>

<CryptoTable coins={coins} setSelectedCoin={setSelectedCoin}/>

<PriceChart coin={selectedCoin}/>

</div>

)

}

export default App