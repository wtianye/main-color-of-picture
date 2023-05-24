export function App() {
  return (
    <div className="h-full w-full flex items-center justify-center ">
      <div className="grid gap-20 grid-cols-3 cursor-pointer">
        {new Array(3).fill(0).map((_, index) => {
          return (
            <img
              style={{
                height: "400px",
              }}
              key={index}
              alt="图片"
              src={`https://picsum.photos/800/800`}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
