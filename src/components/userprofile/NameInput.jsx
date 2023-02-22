const NameInput = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.setName(e.target.value)}
      name="Users Name"
      placeholder="userName will go here"
      maxLength={25}
      autoFocus
    />
  );
};

export default NameInput;
