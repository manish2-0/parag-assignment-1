import React from 'react'

const Dropdowninput = ({ posi, val, setinputs }) => {

    const handlechange = (val) => {

        setinputs((prevItems) =>
            prevItems.map((item, i) => (i === posi ? val : item))
        );

    }

    return (
        <div className='m-2'>
            <p className='font-bold'>Please select from dropdown:</p>

            <select value={val} onChange={(e) => handlechange(e.target.value)} className="block text-base outline-none m-2 p-2 border">
                <option value="">Select..</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </div>
    )
}

export default Dropdowninput