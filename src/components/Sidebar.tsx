import { useEditorStore } from '../lib/useEditorStore';
import { v4 as uuidv4 } from 'uuid';

export const Sidebar = () => {
  const addBlock = useEditorStore((state) => state.addBlock);

  const handleAddBlock = () => {
    addBlock({
      id: uuidv4(),
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      color: 'lightblue',
    });
  };

  return (
    <div className="w-64 bg-white border-r p-4">
      <button
        onClick={handleAddBlock}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        ➕ Add Block
      </button>
    </div>
  );
};
