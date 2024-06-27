import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const submitFormHandler = event => {
        event.preventDefault()


        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    toast.success(`user is successfully added`)
                }
            })
        event.target.reset()
        navigate(`/`)

    }
    const inputFieldHandler = event => {
        const Field = event.target.name
        const value = event.target.value
        const newUser = { ...user }

        newUser[Field] = value
        setUser(newUser)

    }

    return (
        <div>

            <form
                onSubmit={submitFormHandler}
                className="max-w-sm mx-auto mt-5">
                <h2 className='text-center text-2xl font-bold dark:text-white'>Add new user </h2>

                <div className="mt-5 mb-5">
                    <label

                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        name='name'
                        onBlur={inputFieldHandler}
                        type="text"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    />
                </div>
                <div className="mb-5">
                    <label

                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Address
                    </label>
                    <input
                        name='address'
                        type="text"
                        onBlur={inputFieldHandler}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label

                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        name='email'
                        onBlur={inputFieldHandler}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};

export default AddUser;