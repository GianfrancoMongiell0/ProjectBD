import { HeaderBasic, HeaderPro } from "./components/header.tsx";
function App() {
  return (

    <div>
      <HeaderBasic />
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl font-bold text-center">Hello, world!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;