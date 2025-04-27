import { useEditorStore } from '../lib/useEditorStore';

export const Sidebar = () => {
  const addBlock = useEditorStore((state) => state.addBlock);

  return (
    <div className="w-64 bg-white border-r p-4 space-y-4">
      <h2 className="font-bold text-lg mb-4">🛠️ Add Block</h2>
      <button
        onClick={() =>
          addBlock({ type: 'banner', backgroundColor: '#e0e0e0', text: 'Hero Banner', x: 20, y: 20, width: 300, height: 100 })
        }
        className="block w-full py-2 border rounded hover:bg-gray-100"
      >
        ➕ Banner
      </button>
      <button
        onClick={() =>
          addBlock({ type: 'text', content: 'Your Text', fontSize: 24, color: '#333', x: 40, y: 140, width: 200, height: 80 })
        }
        className="block w-full py-2 border rounded hover:bg-gray-100"
      >
        ➕ Text
      </button>
      <button
        onClick={() =>
          addBlock({ type: 'media', src: 'https://via.placeholder.com/150', x: 60, y: 240, width: 150, height: 150 })
        }
        className="block w-full py-2 border rounded hover:bg-gray-100"
      >
        ➕ Media
      </button>
    </div>
  );
};
