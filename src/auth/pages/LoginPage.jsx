import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid item xs={ 12  } sx={{ mb: 2, mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="jhon-doe@gmail.com"
                            fullWidth
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
                        />
                    </Grid>
                
                    <Grid container spacing={ 2 } >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                    
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" fullWidth>
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
    