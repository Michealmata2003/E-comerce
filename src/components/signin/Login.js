import React, { useRef, useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../../Style'
import { CustomFormInput } from '../input/CustomInput'
import Text from './Text';
import { CustomInputButton } from '../buttons/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()

    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    useEffect(() => {
        if (localStorage.getItem('commerce')) {
            navigate('/dashboard')
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password } = values;
        const { res } = await axios.post('https://prakem-api.onrender.com/api/auth/login', {
            email,
            password
        });
        if (res.status === true) {
            localStorage.setItem('values', JSON.stringify(res.data))

        }
        navigate('/dashboard')
    }
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Text />
            <div style={Container}>

                <form onSubmit={handleSubmit} className='w-2/5 m-auto p-6 shadow-2xl my-6'>
                    <CustomFormInput
                        name={'email'}
                        label={'Email*'}
                        placeholder={'customer@demo.com'}
                        type={'email'}
                        onChange={(e) => handleChange(e)}
                    />
                    <CustomFormInput
                        name={'password'}
                        label={'Password*'}
                        placeholder={'Mata03'}
                        type={'password'}
                        onChange={(e) => handleChange(e)}

                    />
                    <CustomInputButton type="submit">SIGNIN</CustomInputButton>
                    <div className='flex gap-3 py-3'>
                        <NavLink to='/signup' className=' w-full text-center justify-center flex m-auto text-base py-3 text-white bg-black hover:bg-design4  hover:text-design2' >CREATE AN ACCOUNT</NavLink>
                        <NavLink to='/login' className=' w-full text-center justify-center flex m-auto text-base py-3 text-black bg-design4 hover:bg-black hover:text-white' >FORGOTTEN PASSWORD</NavLink>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login





// const profileRef = useRef(['userRef', 'passwordRef']);

// const userRef = profileRef.current[0];
// const passwordRef = profileRef.current[1];

// const {user,dispatch, isFetching} = useContext(Context)

//     const handleSubmit  = async (e) => {
//     e.preventDefault();
//     dispatch({type:"LOGIN_START"});
//     try {
//         const res = await axios.get('https://prakem-api.onrender.com/api/auth/login', {
//            email: userRef.current.value,
//            password: passwordRef.current.value,
//         })
//         dispatch({type:"LOGIN_SUCCESS", payload: res.data});

//     } catch (err) {
//         dispatch({type:"LOGIN_FAILURE"});

//     }
// }
// console.log(user)