import Input from "../../components/Input";
import "./Colors.css";
const Colors = () => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title color-title">Color</h2>
          <Input name="All" />
          <Input name="Black" />
          <Input name="Red" />
          <Input name="Blue" />
          <Input name="Green" />
          <Input name="White" />
      </div>
    </>
  );
};

export default Colors;
