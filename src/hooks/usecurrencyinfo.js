import { useEffect,useState }   from "react";
//let's build our own hooks 
function useCurrencyinfo(currency){
    const [data,setData] = useState({})//why useState because refers to data
    useEffect(()=>{//when this hook call the api link will be fetch so we use useEffect
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=> response.json())
        .then((response)=> setData(response[currency]))//now it for print the json data 
        // console.log(data);
        
    },[currency])
    // console.log(data);
    
    return data
}
export default useCurrencyinfo;