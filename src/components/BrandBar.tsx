import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import { Container } from "react-bootstrap";

const BrandBar = () => {
  return (
    <Container style={{ borderBottom: "1px solid #E3E3E3" }} className="d-flex justify-content-between align-items-center p-4">
      <div className="search">
        <span><FontAwesomeIcon icon={faSearch} /></span>
      </div>
      <div className="logo">
        <span>logo</span>
      </div>
      <div className="shoping">
        <span><FontAwesomeIcon icon={faUser} /> Account</span>
        <span><FontAwesomeIcon icon={faShoppingCart} /> Shopping</span> 
      </div>
    </Container>
  );
}

export default BrandBar;
