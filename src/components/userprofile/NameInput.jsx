const NameInput = () => {
  return (
    <input
      type="text"
      name="Users Name"
      placeholder="userName will go here"
      maxLength={25}
      autoFocus
    />
  );
};

export default NameInput;
