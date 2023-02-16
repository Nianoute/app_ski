import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'

const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </>
    )
}

export default MainRouter