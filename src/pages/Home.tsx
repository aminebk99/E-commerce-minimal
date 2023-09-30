import BestSellers from '../components/BestSellers'
import BrandBanner from '../components/BrandBanner'
import BrandBar from '../components/BrandBar'
import FollowProducts from '../components/FollowProducts'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <>
            <BrandBar />
            <NavBar />
            <BrandBanner />
            
            <BestSellers />

            <FollowProducts />
            
        </>
    )
}

export default Home