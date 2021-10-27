import "./dev.css";

function Develop(props) {
  return (
    <div className="testBox">
      <h1>Dev: {props.name}</h1>
      <p>Idade: {props.age}</p>
      <p>País: {props.country}</p>
    </div>
  );
}

export default Develop;
