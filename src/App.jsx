import useStore from './store';
import TopBar from './components/builder/TopBar';
import BlockLibrary from './components/builder/BlockLibrary';
import Canvas from './components/builder/Canvas';
import PropertiesPanel from './components/builder/PropertiesPanel';

export default function App() {
  const mode = useStore((s) => s.mode);
  const selectedId = useStore((s) => s.selectedId);

  return (
    <div className="flex flex-col h-screen bg-slate-950 overflow-hidden font-sans">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        {mode === 'edit' && <BlockLibrary />}
        <Canvas />
        {mode === 'edit' && selectedId && <PropertiesPanel />}
      </div>
    </div>
  );
}