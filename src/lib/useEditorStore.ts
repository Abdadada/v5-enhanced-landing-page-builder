import { create } from 'zustand';
import { BlockData } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface EditorState {
  blocks: BlockData[];
  addBlock: (block: Omit<BlockData, 'id'>) => void;
  updateBlock: (id: string, updates: Partial<BlockData>) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  blocks: [],
  addBlock: (block) => set((state) => ({
    blocks: [...state.blocks, { ...block, id: uuidv4() }]
  })),
  updateBlock: (id, updates) => set((state) => ({
    blocks: state.blocks.map((b) => b.id === id ? { ...b, ...updates } : b)
  }))
}));
