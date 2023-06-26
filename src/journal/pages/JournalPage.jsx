import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {

    const dispatch = useDispatch()

    const onClickNewNote = () => {
        dispatch( startNewNote() )
    }


    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex voluptates sequi hic ab accusantium reprehenderit nesciunt quas vero labore perferendis quae dolore animi, libero quisquam, ratione quam debitis doloribus?</Typography> */}
            
            <NothingSelectedView />

            {/* <NoteView /> */}

            <IconButton
                onClick={ onClickNewNote }
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
            </IconButton>

        </JournalLayout>
  )
}
