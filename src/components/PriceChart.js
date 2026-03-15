import React,{useEffect,useState} from "react"
import {Line} from "react-chartjs-2"
import {
Chart as ChartJS,
LineElement,
PointElement,
CategoryScale,
LinearScale
} from "chart.js"

ChartJS.register(LineElement,PointElement,CategoryScale,LinearScale)

function PriceChart({coin}){

const [prices,setPrices] = useState([])

useEffect(()=>{

fetchChart()

},[coin])

const fetchChart = async () => {

const url =
`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`

const res = await fetch(url)

const data = await res.json()

setPrices(data.prices.map(p=>p[1]))

}

const chartData = {

labels:prices.map((_,i)=>i),

datasets:[
{
label:"7 Day Price Trend",
data:prices
}
]

}

return(

<div>

<h2>Price Chart</h2>

<Line data={chartData}/>

</div>

)

}

export default PriceChart