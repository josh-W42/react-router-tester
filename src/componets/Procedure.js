import Procedures from "./Procedures"

const Procedure = (props) => {
  return (
    <>
      <p>
        {props.match.params.type} page
      </p>
    </>
  );
}

export default Procedure;