import { Col, Container, Row } from "react-bootstrap"

import brand1 from "../../public/brands/brand-1.png"
import brand2 from "../../public/brands/brand-2.png"
import brand3 from "../../public/brands/brand-3.png"
import brand4 from "../../public/brands/brand-4.png"
import brand5 from "../../public/brands/brand-5.png"

const BrandBanner = () => {

    const brands = [
        brand1, brand2, brand3, brand4, brand5
    ]
    return (
        <>
            <Container className="w-100 p-5">
                <Row className="d-flex justify-content-between align-items-center">
                    {brands.map((brand, index) => (
                        <Col key={index} xl={2} sm={6}>
                        <img src={brand} alt="" />
                        </Col>

                    ))}
                </Row>

            </Container>
        </>
    )
}

export default BrandBanner