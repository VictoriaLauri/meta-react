import logo from "./assets/logo.jpg"

function Logo(props) {

  const style = {
    width: "200px",
    height: "200px",
  };

  const pic=<img src={logo} alt="logo" style={style}/>;

    return (
      <div>
        {pic}
      </div>
    );
  };

  export default Logo;