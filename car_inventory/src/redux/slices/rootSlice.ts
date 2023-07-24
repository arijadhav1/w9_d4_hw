import { createSlice } from '@reduxjs/toolkit'; 


export interface CarState {
    // name: string;
    // price: number;
    // // description: string;
    // camera_quality: string;
    // flight_time: string;
    // max_speed: string;
    // dimensions: string;
    // weight: string;
    // cost_of_production: number;
    // series: string 


    make: string;
    model: string;
    year: string;
    color: string;
    description: string;
    price: number;
    miles_per_gallon: string;
    max_speed: string;
    seats: string;

}

const initialState: CarState = {
    // name: 'Droney McDroneFace',
    // price: 0,
    // description: '',
    // camera_quality: '',
    // flight_time: '',
    // max_speed: '',
    // dimensions: '',
    // weight: '',
    // cost_of_production: 0,
    // series: ''

    make: '',
    model: '',
    year: '',
    color: '',
    description: '',
    price: 0,
    miles_per_gallon: '',
    max_speed: '',
    seats: ''
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseColor: (state, action) => { state.color = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseMilesPerGallon: (state, action) => { state.miles_per_gallon = action.payload },
        chooseMaxSpeed: (state, action) => { state.max_speed = action.payload },
        chooseSeats: (state, action) => { state.seats = action.payload },

    }
})

// Export our Reducers
export const reducer = rootSlice.reducer
console.log(rootSlice)
export const {
    chooseMake,
    chooseModel,
    chooseYear,
    chooseColor,
    chooseDescription,
    choosePrice,
    chooseMilesPerGallon,
    chooseMaxSpeed,
    chooseSeats
} = rootSlice.actions