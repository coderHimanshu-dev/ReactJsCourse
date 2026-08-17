import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./Colors/Colors";
import "./SideBar.css";
const SideBar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default SideBar;
