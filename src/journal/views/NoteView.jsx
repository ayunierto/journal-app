import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components"
import { useForm } from "../../hooks"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"

export const NoteView = () => {

    const dispatch = useDispatch()

    const { active: note } = useSelector( state => state.journal )

    const { title, body, date, onInputChange, formState } = useForm( note )

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString().substring(0, 22)
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [ formState ])

    const onSaveNote = () => {
        dispatch( startSaveNote() )
    }

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
                <Button 
                    onClick={ onSaveNote }
                    color="primary" 
                    sx={{ p:2 }}
                >
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
