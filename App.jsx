import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'


function App() {
  const [amount,setAmount]=useState()
  const [from,setFrom] = useState("inr")
  const [to,setTo] = useState("usd")
  const [convertedAmount,setconvertedAmount]=useState()
  const currencyinfo=useCurrencyinfo(from)
  const options = Object.keys(currencyinfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    // setAmount(convertedAmount)
    // setconvertedAmount(amount)
  }
  const convert = () => {
    setconvertedAmount(amount * currencyinfo[to]);
}


 return (
    <div
        className=" bg-center sm:bg-contain md:bg-fill lg:bg-stretch xl:bg-cover w-[100%] h-[100vh] sm:w-[full] sm:h-[full] flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('./src/video/crypto.jpeg')`,
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
                            currencyOptions={options}
                            onCurrencychange={(currency) => setFrom(currency)}
                            selectcurrency={from}
                            onAmountchange={(amount) => setAmount(amount)}
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
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencychange={(currency) => setTo(currency)}
                            selectcurrency={to}
                            amountDisbale
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

export default App;
