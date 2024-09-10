import React from 'react'
import FilterTap from './components/FilterTap/FilterTap';
import MiniTap from './components/MiniTap/MiniTap';
import Card from './components/Card/Card';

const TestPage = () => {
const [filters, setFilters] = useState({});
const [sort, setSort] = useState("popular");
const [view, setView] = useState("grid");

const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
};

const handleSortChange = (sort) => {
    setSort(sort);
};

const handleViewChange = (view) => {
    setView(view);
};  


return (
    <div>
    <FilterTap onFilterChange={handleFilterChange} />
    <MiniTap
        onSortChange={handleSortChange}
        onViewChange={handleViewChange}
      />
    <Card cards={filteredSortedCards} view={view} /> 
    </div>
)
}

export default TestPage