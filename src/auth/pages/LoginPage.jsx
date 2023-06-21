import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <>
            <Grid
              container
              spacing={ 0 }
              direction="column"
              alignItems="center"
              justifyContent='center'
              sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
            >
              <Grid
                item
                className="box-shadow"
                xs={ 3 }
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

                <form>
                  <Grid container>
                    <Grid item xs={ 12  } sx={{ mb: 2 }}>
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

                    <Grid container direction='row' justifyContent="end" sx={{ mt: 1 }}>
                      <Link component={ RouterLink } color="inherit" to="/auth/register">
                        Create Account
                      </Link>
                    </Grid>


                  </Grid>
                </form>
              </Grid>
            </Grid>  
        </>
    )
}
