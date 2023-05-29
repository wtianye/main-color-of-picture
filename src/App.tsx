import { useMemo, useState } from "react";
import ColorThief from "colorthief";

const createImageSeed = () => {
  return Math.round(Math.random() * 10000);
};

export function App() {
  const [themeColors, setThemeColors] = useState<string[] | null>(null);
  const [imageSeeds] = useState(
    new Array(3).fill(0).map(() => createImageSeed())
  );

  const backgroundStyle = useMemo(() => {
    return {
      background:
        themeColors !== null
          ? `linear-gradient(${themeColors.join(",")})`
          : "white",
    };
  }, [themeColors]);

  const handleMouseEnter = (e: any) => {
    const colorThief = new ColorThief();
    const img = e.target;
    const colors = colorThief.getPalette(img, 3);
    const rgbColors: string[] = [];
    colors.forEach((color) => {
      const rbg = `rgb(${color[0]},${color[1]},${color[2]})`;
      rgbColors.push(rbg);
    });
    setThemeColors(rgbColors);
  };

  const handleMouseLeave = () => {
    setThemeColors(null);
  };

  return (
    <div
      className="h-full w-full flex items-center justify-center "
      style={backgroundStyle}
    >
      <div className="grid gap-20 grid-cols-3 cursor-pointer">
        {imageSeeds.map((seed, index) => {
          return (
            <img
              style={{
                height: "400px",
              }}
              key={index}
              alt="图片"
              src={`https://picsum.photos/seed/${seed}800/800`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              crossOrigin=""
            ></img>
          );
        })}
      </div>
    </div>
  );
}
