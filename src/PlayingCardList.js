import React from "react";
import useAxios from "./hooks/useAxios";
import { formatData } from "./helpers";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, fetchData, remove] = useAxios(
    "card",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
 
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => fetchData(formatData)}>
          Add a playing card!
        </button>
        <button onClick={remove}>Remove cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((card) => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
