import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    let res = await r.text()
    console.log(data, res)
    // if (data.username === "vandan") {
    //   setError("blocked", { message: "Sorry, this user is blocked" })
    // }
    // else if (data.username !== "naman") {
    //   setError("invalid", { message: "Invalid credentials" })
    // }
  }

  return (
    <>
      {isSubmitting && <div>Submitting......</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input className='border-2 px-2 m-2' placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min Length is 3" }, maxLength: { value: 8, message: "Max Length is 8" } })} type="text" />
          {errors.username && <div className='text-red-400'>{errors.username.message}</div>}
          <br />

          <input className='border-2 px-2 m-2' placeholder='password' {...register("password")} type="password" />
          <br />

          <input disabled={isSubmitting} className='border-2 px-2 m-2' type="submit" name='submit' />
          {errors.invalid && <div className='text-red-400'>{errors.invalid.message}</div>}
          {errors.blocked && <div className='text-red-400'>{errors.blocked.message}</div>}
        </form>
      </div>

    </>
  )
}

export default App
