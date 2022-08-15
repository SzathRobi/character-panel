import React from 'react';
import { useDrag } from 'react-dnd';

function TestDrag() {
  const [{ isDragging }, drag] = useDrag({
    type: 'test',
  });

  return <div>TestDrag</div>;
}

export default TestDrag;
