import whiteLogo from "../images/whiteLogo.png";
import colorLogo from "../images/colorLogo.png";

const Nav = ({ authToken, minimal, setShowModal, showModal }) => {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;