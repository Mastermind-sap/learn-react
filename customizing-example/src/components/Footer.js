function Footer(props) {
  console.log(props);
  return (
    <div className="copyright">
      <p>Made with love by Myself,{props.name}</p>
    </div>
  );
}

export default Footer;
