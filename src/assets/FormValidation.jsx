import React from 'react'
import { useForm } from "react-hook-form";

function FormValidation() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <>
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className='me-5'>Name:</label>
                        <input
                            id="name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters",
                                },
                            })}
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className='me-5'>Email:</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className='me-3'>Password:</label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p style={{ color: "red" }}>{errors.password.message}</p>
                        )}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormValidation

