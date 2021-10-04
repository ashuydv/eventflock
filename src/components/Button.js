import React from 'react'

function Button({button, filter}) {
    return (
        <div className="container">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="m-4 border-2 border-gray-600 py-2 px-6 focus:outline-none bg-transparent hover:text-white hover:bg-purple-500 hover:border-transparent rounded">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;