import React from 'react'




const FilterTap = ({ onFilterChange }) => {


    const [filters, setFilters] = useState({
        theme: "전체",
        genre: "전체",
        region: "전체",
        status: "전체",
      });
    
      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
        onFilterChange({ ...filters, [name]: value });
      };
    
    

  return (
    <div>FilterTap</div>
  )
}

export default FilterTap