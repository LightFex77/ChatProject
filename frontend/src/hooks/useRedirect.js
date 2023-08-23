import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userSaved = localStorage.getItem("userMine");
    !userSaved && navigate("/");
  }, []);
};

export const useRedirectToChat = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const userSaved = localStorage.getItem("userMine");
      userSaved && navigate("/chat-room");
    }, []);
  };