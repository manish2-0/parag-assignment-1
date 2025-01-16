
import React from 'react';

const Radiobutton = ({ posi, val, setinputs }) => {
    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;

        setinputs((prevItems) =>
            prevItems.map((item, i) => (i === posi ? selectedValue : item))
        );
    };

    return (
        <div className="flex items-center m-2 space-x-4">

            <p className='font-bold'>Please select any radio button:</p>


            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name={`option-${posi}`}
                    value="Checkbox 1"
                    checked={val === "Checkbox 1"}
                    onChange={handleOptionChange}
                    className="form-radio h-5 w-5 text-blue-600"
                />
                <span>Checkbox 1</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name={`option-${posi}`} // Unique name for each group
                    value="Checkbox 2"
                    checked={val === "Checkbox 2"}
                    onChange={handleOptionChange}
                    className="form-radio h-5 w-5 text-blue-600"
                />
                <span>Checkbox 2</span>
            </label>
        </div>
    );
};

export default Radiobutton;
