import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks"
import { useMemo } from "react"

export const LoginPage = () => {
    
    const dispatch = useDispatch()

    const { status, errorMessage } = useSelector( state => state.auth ) 

    const isAuthenticating = useMemo( () => status === 'checking', [ status ] )

    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })

    const onSubmit = ( event ) => {
        event.preventDefault()
        dispatch( startLoginWithEmailAndPassword( email, password ) )
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
                
                    <Grid item xs={ 12  } sx={{ mb: 1 }}>
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
                
                    <Grid 
                        display={ !!errorMessage ? '' : 'none' }
                        container 
                        spacing={ 2 } 
                        sx={{ mb: 2 }}
                    >
                        <Grid item xs={ 12 } >
                            <Alert severity="error" > { errorMessage } </Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={ 2 } >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating }
                                type="submit" 
                                variant="contained" 
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                    
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                disabled={ isAuthenticating }
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
    