import { Link } from "react-router-dom";

const Procedures = (props) => {

  const procedures = [
    "Deep Cleaning",
    "Filling",
    "Crown",
    "Root Canal",
    "Oral Surgery"
  ];

  const procedureArray = procedures.map((item, i) => {
    return <li key={i}><Link to={`/procedures/${item}`}>{item}</Link></li>
  });

  return (
    <div>
      <h1>Procedures</h1>
      <ul>
        {procedureArray}
      </ul>
    </div>
  );
}

export default Procedures;