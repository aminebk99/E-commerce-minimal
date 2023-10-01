import { Button, Container } from "react-bootstrap";
import BestSellersCard from "./BestSellersCard";
import './bestsellers.css'
const BestSellers = () => {
    const listFilter = [
        "All Products",
        "T-Shirt",
        "Hoodies",
        "Jacket",
    ];
    return (
        <>
            <Container>
                <h1 className="text-center mt-5 mb-5">Best Sellers</h1>
                <div className="filter-bar d-flex justify-content-between mb-5">
                    <div className="categ-filter">
                        <ul className="d-flex">
                            {listFilter.map((item, index) => (
                                <li className="me-5" key={index}><a href="">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="filter-button">
                        <Button style={{ background: 'black', border: "none", padding: "10px 20px ", borderRadius: '0Px' }}>
                            Show All
                        </Button>
                    </div>
                </div>
                <div className="best-sellers-content">
                    <BestSellersCard />
                </div>
            </Container>
        </>
    );
}

export default BestSellers;
