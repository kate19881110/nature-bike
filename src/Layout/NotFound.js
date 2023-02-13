import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/login")
        }, 1000)
    }, [navigate])
    return (
        <div>NotFound</div>
    )
}

export default NotFound;
