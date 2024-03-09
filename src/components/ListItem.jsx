/* eslint-disable react/prop-types */

function ListItem({ item, index, handleSort, dragItem, dragOverItem }) {
  return (
    <div
      className="list-item"
      draggable
      onDragStart={() => (dragItem.current = index)}
      onDragEnter={() => (dragOverItem.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
    >
      <img src={item.image} alt="spiroSpathis item" />
      <h3 className="name">{item.name}</h3>
      <p className="price">Price: {item.price}</p>
    </div>
  );
}

export default ListItem;
