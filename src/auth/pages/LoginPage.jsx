import { useDispatch } from "react-redux"
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"

export const LoginPage = () => {
    
    const dispatch = useDispatch()

    const { email, password, onInputChange } = useForm({
        email: 'jhon.doe@gmail.com',
        password: '123456'
    })

    const onSubmit = ( event ) => {
        event.preventDefault()
        dispatch( checkingAuthentication() )
    }

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() )
    }


    return (
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12  } sx={{ mb: 2, mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="jhon-doe@gmail.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>  
                
                    <Grid item xs={ 12  } sx={{ mb: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            sx={{ mb: 2 }}
                            autoComplete="off"
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>
                
                    <Grid container spacing={ 2 } >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button type="submit" variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                    
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                variant="contained" 
                                fullWidth
                                onClick={ onGoogleSignIn }
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                
                    <Grid container direction='row' justifyContent="end" sx={{ mt: 2 }}>
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                        Create Account
                        </Link>
                    </Grid>
                
                
                </Grid>
            </form>
        </AuthLayout>
        )
    }
    