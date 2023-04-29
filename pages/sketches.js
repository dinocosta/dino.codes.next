import Link from "next/link";
import SketchPreview from "../components/sketch_preview";
import { getSketchesData } from "../lib/sketches";

export async function getStaticProps() {
  const sketchesData = getSketchesData();

  return {
    props: {
      sketchesData,
    },
  };
}

export default function Sketches({ sketchesData }) {
  return (
    <div className="my-2">
      <h1 className="mb-8 block text-7xl font-medium">
        <Link href="/" className="align-text-top">←</Link> Sketches
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {sketchesData.map(({ id, image, description }) => (
          <SketchPreview
            key={id}
            id={id}
            image={image}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
