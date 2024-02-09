import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    <div className = "learn-heading">
        <button type="button" className="bi bi-arrow-left" onClick={()=>navigate('/Lesson')}> 
        </button>
    </div>
}