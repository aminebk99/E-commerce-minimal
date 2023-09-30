import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../public/Follow products/image-product-9.png";
import img2 from "../../public/Follow products/image-product-8.png";
import img3 from "../../public/Follow products/image-product-10.png";
import img4 from "../../public/Follow products/image-product-11.png";
import img5 from "../../public/Follow products/image-product-12.png";
import img6 from "../../public/Follow products/image-product-13.png";

const FollowProducts = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    return (
        <>
            <Container className="">
                <div className="content w-100">
                    <h1 className="text-center mt-5 mb-5">Follow Products And Discounts On Instagram</h1>
                    <Row className="w-100">
                        {images.map((img, index) => (
                            <Col key={index} xl={2} md={4} sm={6} className="mr-2">
                                <img src={img} alt="" />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default FollowProducts;
