import { useEditorStore } from '../lib/useEditorStore';

export const Canvas = () => {
  const blocks = useEditorStore((state) => state.blocks);

  return (
    <div className="flex-1 bg-gray-100 relative p-8 overflow-auto">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute"
          style={{
            top: block.y,
            left: block.x,
            width: block.width,
            height: block.height,
            backgroundColor: block.color,
          }}
        />
      ))}
    </div>
  );
};
