import { FileInputIcon, Lock, MoveRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUsers } from "../../Shared/state/UserLogindata";

const Register = ({ settoggle }) => {
  let { register, handleSubmit, reset } = useForm();
  let dispatch = useDispatch();
  let onsubmit = (e) => {
    dispatch(addUsers(e));
    settoggle((prev) => !prev);
    reset();
  };
  return (
    <div className="bg-gray-900 rounded-lg px-3 py-4 w-80 text-white flex flex-col items-center gap-6">
      <div className="self-start">
        <h1 className="text-xl">register</h1>
        <p className="self-start">Enter your credential here</p>
      </div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col gap-4 w-full"
        action=""
      >
        <div className="flex flex-col gap-2">
          <input
            {...register("name", { required: true })}
            className="border  p-1 rounded outline-0"
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <FileInputIcon />
          <input
            {...register("email", { required: true })}
            className="border  p-1 rounded outline-0"
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Lock />
          <input
            {...register("password", { required: true })}
            className="border  p-1 rounded outline-0"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="flex items-center rounded py-2 gap-1 justify-center bg-yellow-400 w-full">
          register <MoveRight />{" "}
        </button>
      </form>
      <h1
        className="text-sm text-red-500 cursor-pointer"
        onClick={() => settoggle((prev) => !prev)}
      >
        Sign-in now
      </h1>
    </div>
  );
};

export default Register;
