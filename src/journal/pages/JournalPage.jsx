import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views"

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex voluptates sequi hic ab accusantium reprehenderit nesciunt quas vero labore perferendis quae dolore animi, libero quisquam, ratione quam debitis doloribus?</Typography> */}
            
            {/* <NothingSelectedView /> */}

            <NoteView />

        </JournalLayout>
  )
}
