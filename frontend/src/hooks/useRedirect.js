import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userSaved = localStorage.getItem("user");
    !userSaved && navigate("/");
  }, []);
};

export const useRedirectToChat = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const userSaved = localStorage.getItem("user");
      !userSaved && navigate("/chat-room");
    }, []);
  };