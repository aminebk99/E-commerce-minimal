import { Container } from "react-bootstrap"

const BrandBar = () => {
  return (
    <>
    <Container
    style={{borderBottom: "1px solid #E3E3E3"}}
     className="d-flex justify-content-between p-4">
      <div className="search">
        <span>search</span>
      </div>
      <div className="logo">
        <span>logo</span>
      </div>
      <div className="shoping">
        <span>account</span>
        <span>shoping</span>
      </div>
      
    </Container>
    </>
  )
}

export default BrandBar