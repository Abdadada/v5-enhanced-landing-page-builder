'use client';

import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { v4 as uuidv4 } from 'uuid';

type BlockType = 'text' | 'image' | 'video';

interface Block {
  id: string;
  type: BlockType;
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize?: number;
  color?: string;
}

export default function PageEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (type: BlockType) => {
    const newBlock: Block = {
      id: uuidv4(),
      type,
      content: type === 'text' ? 'Edit text' : '',
      x: 50,
      y: 50,
      width: type === 'text' ? 200 : 300,
      height: type === 'text' ? 50 : 200,
      fontSize: 16,
      color: '#000000',
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const updateBlock = (id: string, changes: Partial<Block>) => {
    setBlocks((prev) => prev.map((block) => block.id === id ? { ...block, ...changes } : block));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-gray-100 border-r">
        <h2 className="text-lg font-bold mb-4">Blocks</h2>
        <button className="w-full mb-2 p-2 bg-blue-500 text-white rounded" onClick={() => addBlock('text')}>Add Text</button>
        <button className="w-full mb-2 p-2 bg-green-500 text-white rounded" onClick={() => addBlock('image')}>Add Image</button>
        <button className="w-full mb-2 p-2 bg-purple-500 text-white rounded" onClick={() => addBlock('video')}>Add Video</button>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative bg-white">
        {blocks.map((block) => (
          <Rnd
            key={block.id}
            size={{ width: block.width, height: block.height }}
            position={{ x: block.x, y: block.y }}
            onDragStop={(e, d) => updateBlock(block.id, { x: d.x, y: d.y })}
            onResizeStop={(e, direction, ref, delta, position) => {
              updateBlock(block.id, {
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                ...position,
              });
            }}
            bounds="parent"
          >
            <div className="w-full h-full border border-gray-300 bg-gray-50 flex items-center justify-center relative overflow-hidden">
              {block.type === 'text' && (
                <textarea
                  value={block.content}
                  onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                  style={{
                    width: '100%',
                    height: '100%',
                    resize: 'none',
                    fontSize: block.fontSize,
                    color: block.color,
                    textAlign: 'center',
                    background: 'transparent',
                    border: 'none',
                  }}
                  className="text-center"
                />
              )}
              {block.type === 'image' && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        updateBlock(block.id, { content: reader.result as string });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              )}
              {block.type === 'video' && (
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        updateBlock(block.id, { content: reader.result as string });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              )}
              {block.type === 'image' && block.content && (
                <img src={block.content} alt="Uploaded" className="w-full h-full object-cover" />
              )}
              {block.type === 'video' && block.content && (
                <video src={block.content} controls className="w-full h-full object-cover" />
              )}
            </div>
          </Rnd>
        ))}
      </div>
    </div>
  );
}
