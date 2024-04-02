import React, { useState } from 'react';
import './FilterPopup.css';

const FilterPopup = ({
  isOpen,
  onClose,
  onApplyFilters,
  availableAmenities
}) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleSelectAmenity = (amenity) => {
    setSelectedAmenities(prevSelectedAmenities => {
      if (prevSelectedAmenities.includes(amenity)) {
        return prevSelectedAmenities.filter(item => item !== amenity);
      } else {
        return [...prevSelectedAmenities, amenity];
      }
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedAmenities);
    onClose();
  };

  const handleResetFilters = () => {
    setSelectedAmenities([]);
    onApplyFilters([]);
  };

  if (!isOpen) return null;

  return (
    <div className="filter-popup-overlay">
      <div className="filter-popup">
        <button onClick={onClose} className="close-button">×</button>
        <h2>Select Amenities</h2>
        <div className="amenities-list">
          {availableAmenities.map((amenity, index) => (
            <label key={index} className="amenity-option">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleSelectAmenity(amenity)}
              />
              {amenity}
            </label>
          ))}
        </div>
        <div className="filter-actions">
          <button onClick={handleApplyFilters} className="apply-button">Apply</button>
          <button onClick={handleResetFilters} className="reset-button">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
