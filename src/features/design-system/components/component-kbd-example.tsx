import { Kbd } from "@/components/ui/kbd";

export default function KbdExamples() {
  return (
    <div className="not-markdown flex flex-wrap items-center gap-3">
      {/* Modifier keys (symbols) */}
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⌃</Kbd>
      {/* Navigation arrows */}
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
      {/* Editing / control symbols */}
      <Kbd>⌫</Kbd>
      <Kbd>⌦</Kbd> {/* Delete (forward) */}
      <Kbd>⎋</Kbd> {/* Escape (symbol form) */}
      <Kbd>⏎</Kbd> {/* Return symbol */}
      <Kbd>⇥</Kbd> {/* Tab forward */}
      <Kbd>⇤</Kbd> {/* Tab backward */}
      <Kbd>␣</Kbd> {/* Space symbol */}
      {/* Text-based special keys */}
      <Kbd>Enter</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Space</Kbd>
      {/* Function keys */}
      <Kbd>F1</Kbd>
      <Kbd>F2</Kbd>
      <Kbd>F3</Kbd>
      <Kbd>F4</Kbd>
      {/* Common shortcuts */}
      <Kbd>Ctrl + B</Kbd>
      <Kbd>Ctrl + Shift + P</Kbd>
      <Kbd>⌘ K</Kbd>
      <Kbd>⌘ ⌫</Kbd>
      <Kbd>⌘ ⇧ P</Kbd>
      {/* Vim / modal sequences */}
      <Kbd>g g</Kbd>
      <Kbd>:</Kbd>
      {/* Gaming / movement */}
      <Kbd>W</Kbd>
      <Kbd>A</Kbd>
      <Kbd>S</Kbd>
      <Kbd>D</Kbd>
      {/* Rare / nerdy / reference glyphs */}
      <Kbd>⎇</Kbd> {/* Alternate key symbol */}
      <Kbd>⇪</Kbd> {/* Caps Lock */}
      <Kbd>⎈</Kbd> {/* Control symbol */}
      <Kbd>⌽</Kbd> {/* Power / rotate */}
      <Kbd>⏻</Kbd> {/* Power */}
    </div>
  );
}
