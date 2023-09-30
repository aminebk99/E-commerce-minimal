import { Container } from "react-bootstrap"

const NavBar = () => {
  return (
    <>
    <Container className="w 100 p-4">
       <nav>
        <ul className="d-flex justify-content-between">
            <li><a href="">Jewelry & Accessoires</a></li>
            <li><a href="">Clothing & Shoes</a></li>
            <li><a href="">Home & Living</a></li>
            <li><a href="">Wedding & Party</a></li>
            <li><a href="">Toys & entertainment</a></li>
            <li><a href="">Art & Collectibles</a></li>
            <li><a href="">Craft Supplies & Tools</a></li>
        </ul>
       </nav>
        
    </Container>
    </>
  )
}

export default NavBar