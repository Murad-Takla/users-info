import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const updatedData = useLoaderData()
   const navigate = useNavigate()
    const [user, setUser] = useState(updatedData)


    const updateFormHandler = event => {
        event.preventDefault()

        //   console.log(user)
        const agree = window.confirm('Are you sure to want update? ')
        if (agree) {
            fetch(`http://localhost:3000/users/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert(`user data is updated !`)
                    navigate(`/`)
                    }
                    // console.log(data)
                })
        }
    }

    const inputFieldHandler = event => {
        const Field = event.target.name
        const value = event.target.value
        // console.log(value)
        const newUser = { ...user }

        newUser[Field] = value
        setUser(newUser)

    }
    return (

        <div>
            <form
                onSubmit={updateFormHandler}
                className="max-w-sm mx-auto mt-5">
                <h2 className='text-center text-2xl font-bold dark:text-white'>{updatedData.name} </h2>

                <div className="mt-5 mb-5">
                    <label

                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        defaultValue={updatedData.name}
                        name='name'
                        onChange={inputFieldHandler}
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
                        defaultValue={updatedData.address}
                        name='address'
                        type="text"
                        onChange={inputFieldHandler}
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
                        defaultValue={updatedData.email}
                        type="email"
                        name='email'
                        onChange={inputFieldHandler}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Update
                </button>
            </form>

        </div>
    );
};

export default Update;