import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <div className="flex flex-col-reverse text-xs w-full h-[100vh] sm:text-sm lg:flex-row">
      <div className="flex flex-row justify-center p-3 w-full lg:flex-col lg:w-[10%]">
        <SideMenu />
      </div>
      <div className="flex-grow bg-yellow-500">coder</div>
    </div>
  );
};

export default App;
