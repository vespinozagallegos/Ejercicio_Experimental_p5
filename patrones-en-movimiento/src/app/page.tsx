import { SketchComponent } from "@/components/SketchComponent";
import TestSketch from "@/components/TestSketch";
import HomeView from "@/views/HomeView";

export default function Home() {
  return (
      <div className="min-h-screen bg-black">
        <h1 className="text-white text-center py-8 text-2xl">Patrones Generativos con p5.js</h1>
        <SketchComponent/>
        {/* <HomeView/> */}
        {/* <TestSketch/> */}
      </div>  
    );
}
