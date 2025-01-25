import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/Inputbox'
import useCurrencyinfo from './hooks/usecurrencyinfo'
//comment
function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedamount,setConvertedamount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)//it will fetch from json file
  const option = Object.keys(currencyinfo)//it take the value from jason file
  const swap = ()=>{
    setFrom(to)
    setTo(from)//swap the currency type
    setConvertedamount(amount)
    setAmount(convertedamount)//swap the currency value
  }

  const convert = ()=>{
    setConvertedamount(amount*currencyinfo[to])//convert the currency by multiply the amount and the to values
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://m.media-amazon.com/images/I/510WmeXkLXL.png')`,
            backgroundSize: "cover"
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyoption={option}
                            onCurrencychange={(currency)=> setAmount(amount)}
                            selectcurrency={from}
                            onAmountchange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedamount}
                            currencyoption={option}
                            onCurrencychange={(currency)=>setTo(currency)}
                            selectcurrency={to}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
