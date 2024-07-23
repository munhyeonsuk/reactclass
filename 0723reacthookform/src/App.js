import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) 

  return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li>
          <label>성함</label>
          <input defaultValue="기본값" {...register("wr_name")} />
        </li>
        <li>
          <label>아이디</label>
          <input {...register("wr_id", { required: true })} />
        </li>
        <li>
          {errors.wr_id && <span>값을 넣어주세요</span>}
          <input type="submit" value='회원가입' />
        </li>
      </ul>
    </form>
  )
}

