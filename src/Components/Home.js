import { useNavigate } from "react-router-dom"
import Notes from "./Notes"
import { useEffect } from "react";


const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/login');
    }
  }, [navigate]); 
  return (
    <>
      {localStorage.getItem('authToken')?<Notes />:
        "403 Error"
      }
    </>
  )
}

export default Home
