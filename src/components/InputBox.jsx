import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,

    // this hold currency change array 
    currencyOptions = [],

    // by default
    selectCurrency = "usd",

    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    const amountInputId = useId();
    // console.log(amountInputId)

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">


                <label htmlFor='amountInputId' className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input

                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"

                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>


            {/* Right Part */}
            <div className=" w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                {/* give Option */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
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

export default InputBox