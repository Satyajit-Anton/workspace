import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    currencyOptions = [],
    selectcurrency="usd",
    amountDisbale=false,
    currencyDisable=false,
    className = "",
}) {
   
    const Idgen=useId()
    const a="";
    const b=a+amount;

    return (
        <div className={`bg-white p-3 rounded-lg text-lg font-medium flex w-[400px] h-[100px]`}>
            <div className="w-1/2">
                <label htmlFor={Idgen} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={Idgen}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisbale}
                    value={b}
                    onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=>onCurrencychange && onCurrencychange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                    
                    {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}

                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
