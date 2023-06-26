import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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
        addNewEmptyNote: (state, action ) => {
            
        },
        setActiveNote: (state, action ) => {
            
        },
        setNotes: (state, action ) => {
            
        },
        setSaving: (state ) => {
            
        },
        updateNote: (state, action ) => {
            
        },
        deleteNoteById: (state, action ) => {
            
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote, 
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;