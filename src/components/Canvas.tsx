import { Rnd } from 'react-rnd';
import { useEditorStore } from '../lib/useEditorStore';

export const Canvas = () => {
  const blocks = useEditorStore((state) => state.blocks);
  const updateBlock = useEditorStore((state) => state.updateBlock);

  return (
    <div className="flex-1 bg-gray-100 relative overflow-hidden" style={{ height: '100vh' }}>
      {blocks.map((block) => (
        <Rnd
          key={block.id}
          size={{ width: block.width, height: block.height }}
          position={{ x: block.x, y: block.y }}
          onDragStop={(e, d) => updateBlock(block.id, { x: d.x, y: d.y })}
          onResizeStop={(e, dir, ref, delta, position) => {
            updateBlock(block.id, {
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height),
              ...position
            });
          }}
          bounds="parent"
          className="absolute p-2 bg-white shadow-md border rounded cursor-move"
        >
          {block.type === 'banner' && (
            <div className="flex items-center justify-center h-full w-full" style={{ backgroundColor: (block as any).backgroundColor }}>
              {(block as any).text}
            </div>
          )}
          {block.type === 'text' && (
            <div
              style={{
                fontSize: `${(block as any).fontSize}px`,
                color: (block as any).color,
              }}
            >
              {(block as any).content}
            </div>
          )}
          {block.type === 'media' && (
            <img src={(block as any).src} alt="Media" className="w-full h-full object-cover" />
          )}
        </Rnd>
      ))}
    </div>
  );
};
