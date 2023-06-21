import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box 
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer 
            variant="permanent"
            open
            sx={{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Jhon Doe
                </Typography>
            </Toolbar>

            <Divider />

            <List>
                {
                    ["January", "February", "March", "April"].map( text => (
                        <ListItem key={ text }>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'lorem ipsum.' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
