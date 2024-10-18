import { useForm } from "react-hook-form"



const Login = () => {
    const { register, handleSubmit, formState:{errors} } = useForm()
    const onSubmit = (data) => console.log(data)    
return (
<>
    
<form onSubmit={handleSubmit(onSubmit)}>

    <label>Correo: </label>
    <input {...register("correo", { required: true })} />
    <p className='text-danger'>
        {errors.correo?.type==='required'&&"este campo es obligatorio"}
    </p>
    
<br/><br/>

    <label >Contrasena:</label>
    <input {...register("contrasena", { required: true, maxLength: 30 })} />
    <p className='text-danger'>
        {errors.contrasena?.type==='required'&&"este campo es obligatorio"}
        {errors.contrasena?.type==='maxLength'&&"este campo tiene limite de  20 letras"}
    </p>

    <br /><br />
    <input type="submit" />
    </form>
    </>

)
}

export default Login