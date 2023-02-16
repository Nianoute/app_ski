import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import OnePostPage from '../pages/OnePostPage'

const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/:id" element={<OnePostPage />} />
            </Routes>
        </>
    )
}

export default MainRouter