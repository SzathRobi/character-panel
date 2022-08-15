import CharacterCanvas from '../components/canvas/canvas';
import InfoContainer from '../components/info-container/info-container';
import InventorytContainer from '../components/inventory-container/inventory-container';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function IndexPage() {
  return (
    <div className="main">
      <div className="canvas-container">
        <DndProvider backend={HTML5Backend}>
          <InventorytContainer />
        </DndProvider>
        {/* <CharacterCanvas /> */}
        <InfoContainer />
      </div>
    </div>
  );
}
