import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";

import { Card } from "./Card";

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Application Modernization Service",
      },
      {
        id: 2,
        text: "Cloud Engineering Service",
      },
      {
        id: 3,
        text: "Application Stop When Enter 0 Hour and Minute",
      },
      {
        id: 4,
        text: "Display name after mouse hover",
      },
      {
        id: 5,
        text: "Company Reviews option in Company Menu",
      },
      {
        id: 6,
        text: "Performance Engineering Service",
      },
      {
        id: 7,
        text: "create contact & about us page & 404 page",
      },
    ]);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        );
      },
      []
    );

    return (
      <>
        <div>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
