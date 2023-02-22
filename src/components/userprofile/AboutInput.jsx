const AboutInput = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.setAbout(e.target.value)}
      name="about"
      placeholder="Hey there! I am using WhatsApp."
      autoFocus
    />
  );
};

export default AboutInput;
