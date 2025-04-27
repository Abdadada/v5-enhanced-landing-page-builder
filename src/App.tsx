import { Sidebar } from './components/Sidebar';
import { Canvas } from './components/Canvas';

export default function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Sidebar />
      <Canvas />
    </div>
  );
}
