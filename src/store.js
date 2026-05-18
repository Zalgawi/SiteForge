import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SCHEMAS } from './schemas';

function uid() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2, 10);
}

const useStore = create(
  persist(
    (set) => ({
      blocks: [],
      selectedId: null,
      mode: 'edit',
      viewport: 'desktop',

      addBlock: (type) => {
        const schema = SCHEMAS[type];
        if (!schema) return;
        // Deep clone defaults so array props aren't shared
        const props = JSON.parse(JSON.stringify(schema.defaults));
        const block = { id: uid(), type, props };
        set((s) => ({ blocks: [...s.blocks, block] }));
      },

      removeBlock: (id) =>
        set((s) => ({
          blocks: s.blocks.filter((b) => b.id !== id),
          selectedId: s.selectedId === id ? null : s.selectedId,
        })),

      duplicateBlock: (id) =>
        set((s) => {
          const idx = s.blocks.findIndex((b) => b.id === id);
          if (idx === -1) return s;
          const orig = s.blocks[idx];
          const dup = { id: uid(), type: orig.type, props: JSON.parse(JSON.stringify(orig.props)) };
          const blocks = [...s.blocks];
          blocks.splice(idx + 1, 0, dup);
          return { blocks };
        }),

      moveBlock: (id, dir) =>
        set((s) => {
          const idx = s.blocks.findIndex((b) => b.id === id);
          const next = idx + dir;
          if (next < 0 || next >= s.blocks.length) return s;
          const blocks = [...s.blocks];
          [blocks[idx], blocks[next]] = [blocks[next], blocks[idx]];
          return { blocks };
        }),

      updateProp: (id, key, value) =>
        set((s) => ({
          blocks: s.blocks.map((b) =>
            b.id === id ? { ...b, props: { ...b.props, [key]: value } } : b
          ),
        })),

      selectBlock: (id) => set({ selectedId: id }),
      deselect: () => set({ selectedId: null }),
      setMode: (mode) => set({ mode, selectedId: null }),
      setViewport: (viewport) => set({ viewport }),
      clearAll: () => {
        if (window.confirm('Clear all blocks from the page?')) {
          set({ blocks: [], selectedId: null });
        }
      },
    }),
    { name: 'siteforge-v1' }
  )
);

export default useStore;
