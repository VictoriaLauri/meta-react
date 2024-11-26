function Fruits (props) {
  return (
    <ul>
      {props.names.map(f => (
        <li key={f.id}>{f.name}</li>
      ))}
    </ul>
  );
};

export default Fruits;