import BestSellers from '../components/BestSellers'
import BrandBar from '../components/BrandBar'
import FollowProducts from '../components/FollowProducts'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <>
            <BrandBar />
            <NavBar />
            <BestSellers />

            <FollowProducts />
            
        </>
    )
}

export default Home