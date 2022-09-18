import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    const signOutClick = () => {
        auth.signOut();
        navigate('/')
    }
  return (
    <div>
        <h1>Welcome {user?.email}</h1>
        <button onClick={()=> signOutClick()}>Logout</button>
    </div>
  )
}

export default Home