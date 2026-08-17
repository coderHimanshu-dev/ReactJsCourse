import Input from "../../components/Input";
import "./Price.css";
const Price = () => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <Input name="All" />
        <Input name="$0 - $50" />
        <Input name=",$50 - $100" />
        <Input name="$100 - $150" />
        <Input name="Above $150" />
      </div>
    </>
  );
};

export default Price;
