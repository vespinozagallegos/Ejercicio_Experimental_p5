// components/TestSketch.tsx
'use client';
import dynamic from 'next/dynamic';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), { ssr: false });

export default function TestSketch() {
  const setup = (p5: any, ref: Element) => p5.createCanvas(400, 400).parent(ref);
  const draw = (p5: any) => p5.background(255, 0, 0);
  return <Sketch setup={setup} draw={draw} />;
}