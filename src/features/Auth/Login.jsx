import { FileInputIcon, Lock, MoveRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Login = ({ settoggle }) => {
  let { users } = useSelector((store) => store.users);
  let { register, handleSubmit, reset } = useForm();
  let navigate = useNavigate();
  let onsubmit = (e) => {
    let loginuser = users.find(
      (val) => val.email === e.email && val.password === e.password,
    );
    if (loginuser) {
      navigate("/home");
    }
  };
  return (
    <div className="bg-gray-900 rounded px-3 py-4 w-70 text-white flex flex-col items-center gap-6">
      <div className="self-start">
        <h1 className="text-xl">Sign-in</h1>
        <p className="self-start">Enter your credential here</p>
      </div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-4 w-full"
        action=""
      >
        <div className="flex flex-col gap-2">
          <FileInputIcon />
          <input
            {...register("email", { required: true })}
            className="border  p-1 rounded outline-0"
            type="text"
            placeholder="Email address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Lock />
          <input
            {...register("password", { required: true })}
            className="border  p-1 rounded outline-0"
            type="text"
            placeholder="Password"
          />
        </div>
        <button className="flex items-center rounded py-2 gap-1 justify-center bg-yellow-400 w-full">
          Sign in <MoveRight />{" "}
        </button>
      </form>
      <h1
        className="text-sm text-red-500 cursor-pointer"
        onClick={() => settoggle((prev) => !prev)}
      >
        register now
      </h1>
    </div>
  );
};

export default Login;
