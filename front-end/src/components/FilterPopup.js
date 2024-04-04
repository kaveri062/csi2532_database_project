import React from 'react';
import './FilterPopup.css';

const FilterPopup = ({ onClose, filters, setFilters, applyFilters }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Directly update the filter with the selected value.
        setFilters({ ...filters, [name]: value });
    };

    const applyFiltersHandler = () => {
        applyFilters(filters); // Pass updated filters to the parent component for filtering
    };

    const hotelChains = [
        'North Star Lodgings',
        'Maple Leaf Resorts',
        'Urban Getaway Hotels',
        'Cascadia Boutique Retreats',
        'Lakeside Leisure Resorts'
    ];
    const capacities = ['1', '2', '3', '4'];
    const ratings = ['1', '2', '3', '4', '5'];

    const createCheckboxGroup = (title, items, name) => (
        <>
            <h3>{title}</h3>
            {items.map((item, index) => (
                <label key={index}>
                    <input
                        type="checkbox"
                        name={name}
                        value={item}
                        checked={filters[name] === item}
                        onChange={handleInputChange}
                    />
                    {item}
                </label>
            ))}
        </>
    );

    return (
        <div className="filter-popup-overlay">
            <div className="filter-popup">
                <h2>Filters</h2>
                <button onClick={onClose} className="close-button">X</button>
                <div>
                    <h3>Location</h3>
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleInputChange}
                        placeholder="Enter location"
                    />
                </div>

                {createCheckboxGroup('Hotel Chain', hotelChains, 'chainName')}
                <div>
                    <h3>Rating</h3>
                    <select name="rating" value={filters.rating} onChange={handleInputChange}>
                        <option value="">Select Rating</option>
                        {ratings.map((rating, index) => (
                            <option key={index} value={rating}>{rating}</option>
                        ))}
                    </select>
                </div>                
                {createCheckboxGroup('Capacity', capacities, 'capacity')}

                <div>
                    <h3>Price Range</h3>
                    <label htmlFor="minPrice">Min Price</label>
                    <select name="minPrice" value={filters.minPrice} onChange={handleInputChange}>
                        <option value="0">$0</option>
                        <option value="50">$50</option>
                        <option value="100">$100</option>
                        <option value="150">$150</option>
                        <option value="200">$200</option>
                        <option value="250">$250+</option>
                    </select>

                    <label htmlFor="maxPrice">Max Price</label>
                    <select name="maxPrice" value={filters.maxPrice} onChange={handleInputChange}>
                        <option value="100">$100</option>
                        <option value="150">$150</option>
                        <option value="200">$200</option>
                        <option value="250">$250</option>
                        <option value="300">$300</option>
                        <option value="10000">$300+</option>
                    </select>
                </div>

                <div className="filter-actions">
                    <button className="reset-button" onClick={() => setFilters({
                        chainName: '',
                        location: '',
                        capacity: 0,
                        minPrice: 0,
                        maxPrice: 10000,
                        rating: 0,
                    })}>Reset</button>
                    <button className="apply-button" onClick={applyFiltersHandler}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default FilterPopup;
