import React from 'react';
import { useParams } from 'react-router-dom';
const Chats = () => {
    const { id } = useParams()
    console.log('id :', id);
    return (
        <>
            <h1>Chats</h1>
        </>
    );
};

export default Chats;