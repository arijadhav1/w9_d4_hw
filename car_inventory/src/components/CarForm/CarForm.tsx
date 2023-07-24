import React from "react";
import { useDispatch, useStore } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from '@mui/material';

import {
    chooseMake,
    chooseModel,
    chooseYear,
    chooseColor,
    chooseDescription,
    choosePrice,
    chooseMilesPerGallon,
    chooseMaxSpeed,
    chooseSeats
} from '../../redux/slices/rootSlice';

import { CarState } from "../../redux/slices/rootSlice";
import { Input } from "../sharedComponents";
import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks/FetchData";

interface CarFormProps {
    id?: string;
    data?: CarState
}


export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch();
    // const { droneData, getData} = useGetData()
    const store = useStore()
    const { register, handleSubmit } = useForm<CarState>({})

    const onSubmit: SubmitHandler<CarState> = async(data, event) => {
        if (event) event?.preventDefault()
        
        if (props.id){
            console.log(props.id)
            await serverCalls.update(props.id, data);
            console.log(`Update car: ${data.make}`);
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseYear(data.year))
            dispatch(chooseColor(data.color))
            dispatch(chooseDescription(data.description))
            dispatch(choosePrice(data.price))
            dispatch(chooseMilesPerGallon(data.miles_per_gallon))
            dispatch(chooseMaxSpeed(data.max_speed))
            dispatch(chooseSeats(data.seats))

            console.log(store.getState())

            await serverCalls.create(store.getState() as CarState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='make'>Car Make</label>
                    <Input {...register('make')} name='make' placeholder='make Here' />
                </div>
                <div>
                    <label htmlFor='model'>Car Model</label>
                    <Input {...register('model')} name='model' placeholder='Model Here' />
                </div>
                <div>
                    <label htmlFor='year'>Car Year</label>
                    <Input {...register('year')} name='year' placeholder='Year Here' />
                </div>
                <div>
                    <label htmlFor='color'>Car Color</label>
                    <Input {...register('color')} name='color' placeholder='Color Here' />
                </div>
                <div>
                    <label htmlFor='description'>Description </label>
                    <Input {...register('description')} name='description' placeholder='Description Here' />
                </div>
                <div>
                    <label htmlFor='price'>Car Price</label>
                    <Input {...register('price')} name='price' placeholder='Price Here' />
                </div>
                <div>
                    <label htmlFor='miles_per_gallon'>Miles Per Gallon</label>
                    <Input {...register('miles_per_gallon')} name='miles_per_gallon' placeholder='Miles Per Gallon Here' />
                </div>
                <div>
                    <label htmlFor='max_speed'>Max Speed</label>
                    <Input {...register('max_speed')} name='max_speed' placeholder='Max Speed Here' />
                </div>
                <div>
                    <label htmlFor='seats'>Seats</label>
                    <Input {...register('seats')} name='seats' placeholder='Seats Here' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}