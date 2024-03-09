import { useState, useRef } from "react";
import { data } from "../data";
import ListItem from "./ListItem";

function List() {
  const [spiroSpathis, setSpiroSpathis] = useState(data);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let spiroSpathisClone = [...spiroSpathis];

    const draggedItem = spiroSpathisClone.splice(dragItem.current, 1)[0];

    spiroSpathisClone.splice(dragOverItem.current, 0, draggedItem);

    dragItem.current = null;
    dragOverItem.current = null;

    setSpiroSpathis(spiroSpathisClone);

    const orderArray = spiroSpathisClone.map((item, index) => ({
      id: item.id,
      order: index + 1,
    }));

    console.log(orderArray);
  };

  return (
      <div className="list">
        {spiroSpathis.map((item, index) => (
          <ListItem
            key={item.id}
            index={index}
            item={item}
            dragItem={dragItem}
            handleSort={handleSort}
            dragOverItem={dragOverItem}
          />
        ))}
      </div>
  );
}

export default List;
