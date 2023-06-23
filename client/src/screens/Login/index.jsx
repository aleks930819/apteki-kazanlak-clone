import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const LoginScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const icon = isShowPassword ? (
    <AiFillEyeInvisible className="absolute right-3 text-2xl text-primary cursor-pointer" />
  ) : (
    <AiFillEye className="absolute right-3 text-2xl text-primary cursor-pointer" />
  );

  return (
    <section className="mx-auto mb-10 mt-10 flex  w-full items-center justify-center rounded-md bg-white text-black shadow-lg sm:w-[40vw]">
      <form className="flex w-full flex-col items-center p-10">
        <div className="justfiy-center mb-5 flex w-full flex-col items-center gap-2">
          <label htmlFor="email" className="self-start text-2xl text-primary">
            Имейл
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="w-full rounded-md border-2 border-primary p-1 text-lg"
          />
        </div>
        <div className="relative flex w-full flex-col items-center justify-center gap-2">
          <label
            htmlFor="password"
            className="self-start text-2xl text-primary"
          >
            Парола
          </label>
          <input
            type={isShowPassword ? 'text' : 'password'}
            id="password"
            placeholder="******"
            className="w-full rounded-md border-2 border-primary p-1 text-lg"
          />
          <div
            className="absolute bottom-8 right-2"
            onClick={handleShowPassword}
          >
            {icon}
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginScreen;
