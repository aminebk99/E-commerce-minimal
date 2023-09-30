import img1 from '../../public/best sellers/image-product.png'
import img2 from '../../public/best sellers/image-product-4.png'
import img3 from '../../public/best sellers/image-product-6.png'
import img4 from '../../public/best sellers/image-product-7.png'

const BestSellersCard = () => {
    const images = [
        img1,img2,img3,img4
    ]

  return (
    <>
    <div className="best-card w-100 d-flex justify-content-between">
        {images.map((image, index) => (

        <img key={index} src={image} alt="" />
        ))}

    </div>
    </>
  )
}

export default BestSellersCard