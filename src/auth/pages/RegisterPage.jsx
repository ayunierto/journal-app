import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
    email: 'jhon-doe.a@gmail.com',
    password: '123456',
    dispalyName: 'Jhon Doe'
}

export const RegisterPage = () => {

    const { email, password, dispalyName, onInputChange, formState } = useForm( formData )

    const onSubmit = ( event ) => {
        event.preventDefault()
        console.log( formState )
    }

    return (
        <AuthLayout title="Register">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12  } sx={{ mb: 2, mt: 2 }}>
                        <TextField
                            label="Full Name"
                            type="text"
                            placeholder="Jhon Doe"
                            fullWidth
                            name="dispalyName"
                            onChange={ onInputChange }
                            value={ dispalyName }
                        />
                    </Grid>  

                    <Grid item xs={ 12  } sx={{ mb: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="jhon-doe@gmail.com"
                            fullWidth
                            name="email"
                            onChange={ onInputChange }
                            value={ email }
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
                            onChange={ onInputChange }
                            value={ password }
                        />
                    </Grid>
                
                    <Grid container spacing={ 2 } >
                        <Grid item xs={ 12 } >
                            <Button 
                                type="submit"
                                variant="contained" 
                                fullWidth
                            >
                                Register
                            </Button>
                        </Grid>
                    
                    </Grid>
                
                    <Grid container direction='row' justifyContent="end" sx={{ mt: 2 }}>
                        <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
                        <Link component={ RouterLink } color="inherit" to="/auth/login">
                          Login
                        </Link>
                    </Grid>
                
                
                </Grid>
            </form>
        </AuthLayout>
        )
    }
    