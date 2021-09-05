const Genre = ({ id, name }) => {
  return (
    <div>
      <input
        onClick={() => console.log(name)}
        type="checkbox"
        name={name}
        id={name}
      />
      <label htmlFor={name}>
        {id} - {name}
      </label>
    </div>
  );
};

export default Genre;
