import React from "react";
import "./Learn.css"
import { useNavigate } from "react-router-dom";

function Learn() {
  const navigate = useNavigate();

  return (
    <div className="learn">

      <div class="learn-header">
      <button 
          type="button" onClick={() => navigate('/')} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg></button>
        </div>
        <div>
        <button 
          type="button" 
          className="btn btn-success btn-circle btn-xl" 
          onClick={() => navigate('/Lesson')}
          >
        </button>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Learn;