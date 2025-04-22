import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={logo} alt="Logo" className="h-8" />
      <h1 className="text-lg font-thin ml-4 tracking-wider text-primary">CodeMetric</h1>
    </div>
  );
};

export default Header;
