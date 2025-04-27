import { create } from 'zustand';
import { Block } from '../types';

interface EditorState {
  blocks: Block[];
  addBlock: (block: Block) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  blocks: [],
  addBlock: (block) => set((state) => ({ blocks: [...state.blocks, block] })),
}));
