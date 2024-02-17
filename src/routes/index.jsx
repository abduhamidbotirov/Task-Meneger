import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import Chats from '../pages/Chats/Chats';
const index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={< HomePage />} />
                <Route path='/chat/:id' element={< Chats />} />
            </Routes>
        </>
    );
};

export default index;