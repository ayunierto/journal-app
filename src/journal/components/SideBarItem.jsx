import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
import { useMemo } from "react";
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title, body, id, date, imageUrls }) => {

    const dispatch = useDispatch()

    const newTitle = useMemo( () => {
        return title.length > 10
        ? title.substring(0, 10) + '...'
        : title
    }, [ title ])

    const onActivateNote = () => {
        dispatch( setActiveNote({
            id,
            title,
            body,
            date,
            imageUrls
        }) )
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ onActivateNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

SideBarItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.number,
    imageUrls: PropTypes.array,
}

SideBarItem.defaultProps = {
    imageUrls: []
}