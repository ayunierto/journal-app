import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"

export const AppRouter = () => {

    const { status } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    useEffect(() => {
      onAuthStateChanged( FirebaseAuth, async(user) => {
        if (!user) return dispatch( logout() )

        const { uid, email, photoURL, displayName } = user
        dispatch( login( uid, email, photoURL, displayName ) )
      })
    
    }, [])
    

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                (status === 'authenticate')
                ? <Route path="/auth/*" element={ <AuthRoutes /> } />
                : <Route path="/*" element={ <JournalRoutes /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />

            {/* Login and Register */}
            {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

            {/* JournalApp */}
            {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
        </Routes>
    )
}
