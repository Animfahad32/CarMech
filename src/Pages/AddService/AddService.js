import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      
    axios.post('https://shielded-lake-84025.herokuapp.com/services', data)
    .then(res => {
        if(res.data.insertedId){
            alert('Successfully Added')
            reset()
        }
    })

}
    return (
        <div className="add-service"> 
            <h1 className="mt-5">Tell Us Which Service You Want Us To Add</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("time")} placeholder="Estd time" />
                <input type="number" {...register("price")} placeholder="Estd. Price"/>
                <input {...register("img")} placeholder="image link" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;