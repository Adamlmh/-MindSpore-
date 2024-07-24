import loginImage from "../../assest/images/login.png";
import registerImage from "../../assest/images/register.png";
function LeftSide({ isLogin }) {
  return (
    <div className="leftSide">
      <img src={isLogin ? loginImage : registerImage} alt="" />
    </div>
  );
}

export default LeftSide;
