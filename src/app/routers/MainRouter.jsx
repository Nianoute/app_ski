import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import OnePostPage from '../pages/OnePostPage'
import NewShopPage from '../pages/NewShopPage'
import OneShopPage from '../pages/OneShopPage'
import AllShopPage from '../pages/AllShopPage'

const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/:id" element={<OnePostPage />} />
                <Route path="/newshop" element={<NewShopPage />} />
                <Route path="/shop/:id" element={<OneShopPage />} />
                <Route path="/shop" element={<AllShopPage />} />
            </Routes>
        </>
    )
}

export default MainRouter