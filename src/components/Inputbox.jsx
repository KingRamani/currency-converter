import React,{useId} from 'react'
//useId = generat unique IDs that can be passed to accessiblility attributes.
function InputBox({
  label,
  amount,
  onAmountchange,
  onCurrencychange,
  currencyoption = [],
  selectcurrency = "usd",//if user not select anything so default value will be usd
  amountDisable = false,//A disabled element is unusable.
  currecyDisable = false,
  
  className = "",
}) {
  const amountInputid = useId()
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>   {/* if user wants to change in css we call the className*/ }
          <div className="w-1/2">
          {/* The htmlFor property sets or returns the value of the for attribute of a label.
                The for attribute specifies which form element a label is bound to.*/}
              <label  htmlFor={amountInputid} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputid}
                  className="outline-solid w-full bg-transparent text-black py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
              />{/*somtime js take the number in string so we use Number()*/}
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 text-black cursor-pointer outline-solid"
                  value={selectcurrency}
                  onChange={(e)=>onCurrencychange && onCurrencychange(e.target.value)}
                  disabled={currecyDisable}
              >
                  
                      {currencyoption.map((Currency)=>(<option key={Currency} value={Currency}>
                        {Currency}
                        </option>))}
              </select>{/*if you want to loop properly so use key*/}
          </div>
      </div>
  );
}

export default InputBox;