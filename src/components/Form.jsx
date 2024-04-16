import React from 'react'

const Form = () => {
  return (
    <div>
        <h1>Login</h1>
    <form action="" className='form'>
        <div className='container-input'>
            <label id='name'>Nombre </label>
            <input type="text " placeholder='Nombre' />
        </div>
        <div className='container-input'>
            <label id='name'>Password </label>
            <input type="password" placeholder='*****' />
        </div>
    </form>
    </div>
  )
}

export default Form
