import React from 'react'

const MiniTap = ({ onViewChange, onSortChange }) => {
  return (
    <div>
    <button onClick={() => onViewChange("grid")}>그리드형</button>
    <button onClick={() => onViewChange("list")}>리스트형</button>
    <button onClick={() => onSortChange("popular")}>인기순</button>
    <button onClick={() => onSortChange("recent")}>최신순</button>
    </div>
  )
}

export default MiniTap