import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import styles from './inventory-container.module.css';
import InventroySlot from './inventroy-slot';

function InventorytContainer() {
  const [inventory, setInventory] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);

  const [{ isOver }, dropRef] = useDrop({
    accept: 'slot',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <section className={styles.inventoryContainer}>
      <h2>Inventory</h2>

      <div
        ref={dropRef}
        style={{ backgroundColor: isOver ? '#ccc' : '#aaa' }}
        className={styles.inventoryGrid}
      >
        {inventory.map((item, index) => (
          <InventroySlot
            styles={styles}
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default InventorytContainer;
