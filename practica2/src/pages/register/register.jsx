import { useForm } from "react-hook-form"


const register = () => {
    const { register, handleSubmit, formState:{errors} } = useForm()
    const onSubmit = (data) => console.log(data)

return (
<>
<form onSubmit={handleSubmit(onSubmit)}>
    <label>Nombre: </label>
    <input {...register("nombre", { required: true,minLength:2, maxLength: 20 })} />
    <p className='text-danger'>
        {errors.nombre?.type==='required'&&"este campo es obligatorio"}
        {errors.nombre?.type==='maxLength'&&"este campo tiene limite de  20 letras"}
        {errors.nombre?.type==='minLength'&&"este campo tiene como minimo de 2 letras"}

    </p>

    <br /><br />
    <label>Correo: </label>

    <input {...register("correo", { required: true})} />
    <p className='text-danger'>
        {errors.correo?.type==='required'&&"este campo es obligatorio"}

    </p>
    
<br/><br/>

    <label>Rol:
    <select name="selectedrol">
        <option value="admin">admin</option>
        <option value="usuario">usuario</option>
    </select>
    </label>
    <br /><br />
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

export default register