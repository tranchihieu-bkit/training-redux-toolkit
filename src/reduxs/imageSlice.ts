import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface imageState {
    url: string;
    name: string;
}

const initialState: imageState[] = [
    {
        name: 'picture number 1',
        url: 'https://picsum.photos/id/51/300/300'
    },
    {
        name: 'picture number 2',
        url: 'https://picsum.photos/id/69/300/300'
    },
    {
        name: 'picture number 3',
        url: 'https://picsum.photos/id/6/300/300'
    },
    {
        name: 'picture number 3',
        url: 'https://picsum.photos/id/19/300/300'
    },
    {
        name: 'picture number 4',
        url: 'https://picsum.photos/id/21/300/300'
    },
    {
        name: 'picture number 5',
        url: 'https://picsum.photos/id/76/300/300'
    },
    {
        name: 'picture number 6',
        url: 'https://picsum.photos/id/67/300/300'
    },
    {
        name: 'picture number 7',
        url: 'https://picsum.photos/id/17/300/300'
    },
    {
        name: 'picture number 8',
        url: 'https://picsum.photos/id/31/300/300'
    },
    {
        name: 'picture number 9',
        url: 'https://picsum.photos/id/20/300/300'
    }
];

export const imageSlice = createSlice({
    name: "imageList",
    initialState,
    reducers: {
        addImage: (state, action: PayloadAction<imageState>) => [...state, action.payload],
        deleteImage: (state, action: PayloadAction<number>) => [...state.filter((img, index) => index !== action.payload)],
    }
});

export const {addImage, deleteImage} = imageSlice.actions;
export default imageSlice.reducer;