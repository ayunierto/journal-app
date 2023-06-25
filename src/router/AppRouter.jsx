import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {

    const { status } = useCheckAuth

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
