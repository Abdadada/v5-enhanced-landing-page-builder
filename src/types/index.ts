export interface BaseBlock {
  id: string;
  type: 'banner' | 'text' | 'media';
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BannerBlockData extends BaseBlock {
  type: 'banner';
  backgroundColor: string;
  text: string;
}

export interface TextBlockData extends BaseBlock {
  type: 'text';
  content: string;
  fontSize: number;
  color: string;
}

export interface MediaBlockData extends BaseBlock {
  type: 'media';
  src: string;
}

export type BlockData = BannerBlockData | TextBlockData | MediaBlockData;
