import React,{useState} from 'react';
import Button from '../UI/Button';

const NewUser=()=>{
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const [address,setAddress]=useState('');
    const nameChangeHandler=(event)=>{
        setName(event.target.value)

    }
    const mobileChangeHandler=(event)=>{
        setMobile(event.target.value)

    }
    const addressChangeHandler=(event)=>{
        setAddress(event.target.value)

    }
    
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        console.log({
            name:event.target.name.value,
            mobile:event.target.phone.value,
            address:event.target.address.value
        })
    }


    return (
        <>
        <form onSubmit={formSubmitHandler}>
            <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' value={name} onChange={nameChangeHandler}/>
            </div>
            <div>
            <label htmlFor='phone'>Mobile:</label>
            <input type='tel' id='phone' value={mobile} onChange={mobileChangeHandler}/>
            </div>
            <div>
            <label htmlFor='address'>Address:</label>
            <input type='text' id='address' value={address} onChange={addressChangeHandler}/>
            </div>
            <Button type='submit' >Add</Button>
        </form>
        </>
    );
}
export default NewUser;