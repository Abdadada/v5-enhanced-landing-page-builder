import { Canvas } from '../components/Canvas';
import { Sidebar } from '../components/Sidebar';

export const EditorPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Canvas />
    </div>
  );
};
