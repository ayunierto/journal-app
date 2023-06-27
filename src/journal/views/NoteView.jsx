import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { useMemo } from "react"

export const NoteView = () => {

    const { active: note } = useSelector( state => state.journal )

    const { title, body, date, onInputChange } = useForm( note )

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString().substring(0, 22)
    }, [date])

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={ 30 } fontWeight="light">{ dateString }</Typography>
            </Grid>

            <Grid item>
                <Button color="primary" sx={{ p:2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={ 5 }
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <ImageGalery />
        </Grid>
    )
}
