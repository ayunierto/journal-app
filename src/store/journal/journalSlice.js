import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSave: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'asd123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: []  // [ 'http://photo1.jpg', 'http://photo2.jpg', 'http://photo3.jpg' ]
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload )
            state.isSaving = false
        },
        setActiveNote: (state, action ) => {
            state.active = action.payload
        },
        setNotes: (state, action ) => {
            state.notes = action.payload
        },
        setSaving: (state ) => {
            state.isSaving = true
            // fala por hacer
        },
        updateNote: (state, action ) => {
            state.isSaving = false
            state.notes = state.notes.map( note => {

                if ( note.id === action.payload.id ) {
                    return action.payload
                }

                return note
            })

            // todo: mostrar mensaje de actualizacion
        },
        deleteNoteById: (state, action ) => {
            
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote, 
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;