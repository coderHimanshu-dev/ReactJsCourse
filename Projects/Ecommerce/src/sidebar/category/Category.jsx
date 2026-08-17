import Input from "../../components/Input";
import "./Category.css";
const Category = () => {
  return (
    <>

      <div>
      <h2 className="sidebar-title">Category</h2>
        <Input name="All" />
        <Input name="Sneakers" />
        <Input name="Flats" />
        <Input name="Sandles" />
        <Input name="Heels" />
      </div>
    </>
  );
};

export default Category;
