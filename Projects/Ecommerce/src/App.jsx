import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./sidebar/SideBar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recomended />
      <Products />
    </>
  );
};

export default App;
