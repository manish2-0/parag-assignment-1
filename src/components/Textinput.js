import React from 'react'

const Textinput = ({ posi, val, setinputs }) => {

    const handlechange = (event) => {
        event.preventDefault();
        let vv = event.target.value;
        setinputs((prevItems) =>
            prevItems.map((item, i) => (i === posi ? vv : item))
        );

    }

    return (
        <div className='m-2 '>
            <p className='font-bold'>Please enter your text here:</p>
            <input
                type="text"
                value={val}
                id={posi}
                onChange={handlechange}
                placeholder="Text here"
                className="m-2 p-2 border"
            />
        </div>
    )
}

export default Textinput