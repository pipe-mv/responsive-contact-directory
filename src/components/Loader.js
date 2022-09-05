import "./Loader.css";

const Loader = () => {
  return (
    <div className="lds-ring grid place-content-evenly">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
