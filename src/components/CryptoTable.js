import React from "react"

function CryptoTable({coins,setSelectedCoin}){

return(

<table>

<thead>

<tr>
<th>Coin</th>
<th>Price</th>
<th>24h Change</th>
</tr>

</thead>

<tbody>

{coins.map((coin)=>{

const color =
coin.price_change_percentage_24h >= 0 ? "green":"red"

return(

<tr
key={coin.id}
onClick={()=>setSelectedCoin(coin.id)}
>

<td>

<img src={coin.image} width="25"/>

{coin.name}

</td>

<td>${coin.current_price}</td>

<td className={color}>
{coin.price_change_percentage_24h.toFixed(2)}%
</td>

</tr>

)

})}

</tbody>

</table>

)

}

export default CryptoTable