import React from 'react';
import { useDrag } from 'react-dnd';

function InventroySlot({ styles, index, item }) {
  /* const [{ isDragging }, dragRef] = useDrag({
    type: 'slot',
    item: { index, item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }); */

  const [{ isDragging }, drag] = useDrag({
    type: 'slot',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={styles.inventorySlot}>
      <p>
        slot {item} {isDragging && '😱'}
      </p>
    </div>
  );
}

export default InventroySlot;
