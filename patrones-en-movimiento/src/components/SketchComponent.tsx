'use client';

import dynamic from 'next/dynamic';
import type p5Types from 'p5';

const Sketch = dynamic(
  () => import('react-p5').then((mod) => {
    const { default: ReactP5 } = mod;
    return (props: any) => <ReactP5 {...props} />;
  }),
  { ssr: false }
);

export const SketchComponent = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);
    p5.background(0);
  };

  const draw = (p5: p5Types) => {
    p5.fill(p5.random(255), p5.random(255), p5.random(255));
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
  };

  return <Sketch setup={setup} draw={draw} />;
};