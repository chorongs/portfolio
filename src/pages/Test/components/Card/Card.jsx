import React from 'react'

const Card = ({ cards, view }) => {
return (
    <div className={view === "grid" ? "grid-view" : "list-view"}>
        {cards.map((card) => (
        <Card key={card.id} card={card} />
    ))}
        </div>
)
}

export default Card