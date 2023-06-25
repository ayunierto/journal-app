import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks"

// const formData = {
//     email: '',
//     password: '',
//     displayName: ''
// }

const formData = {
    email: 'jhon.doe@gmail.com',
    password: '123456',
    displayName: 'Jhon Doe'
}

const formValidations = {
    email: [ ( value ) => value.includes('@'), 'The email must contain an @' ],
    password: [ ( value ) => value.length >= 6, 'Password must contain at least 6 characters.' ],
    displayName: [ ( value ) => value.length >= 1, 'The name is required.' ],
}

export const RegisterPage = () => {

    const { 
        formState, displayName, email, password, onInputChange,  
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm( formData, formValidations )

    const [formSubmitted, setFormSubmitted] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = ( event ) => {
        event.preventDefault()
        setFormSubmitted(true)
        dispatch( startCreatingUserWithEmailAndPassword(formState) )
    }

    return (
        <AuthLayout title="Register">
            <h1>{ isFormValid ? "valid" : 'error' }</h1>
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12  } sx={{ mb: 2, mt: 2 }}>
                        <TextField
                            label="Full Name"
                            type="text"
                            placeholder="Jhon Doe"
                            fullWidth
                            name="displayName"
                            onChange={ onInputChange }
                            value={ displayName }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
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
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
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
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
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
    