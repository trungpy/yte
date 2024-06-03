import Leftpage from "./Leftpage";

export const metadata = {
  title: "Sản phẩm",
};

export default function LayoutProject({ children }) {
  return (
    <div className="my-10 grid grid-cols-1 gap-x-4 px-4 md:px-20 lg:grid-cols-4">
      <div className="col-span-1">
        <Leftpage />
      </div>
      <div className="col-span-3 min-h-screen">{children}</div>
    </div>
  );
}
