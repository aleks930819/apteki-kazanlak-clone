import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Photo from '../../assets/contacts-banner.jpg';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import { login } from '../../services/apiAuth';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { userLogin } = useContext(AuthContext);

  useDocumentTitle('Вход | Социални Аптеки Казанлък');

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const icon = isShowPassword ? (
    <AiFillEye className="absolute right-3 cursor-pointer text-2xl text-primary" />
  ) : (
    <AiFillEyeInvisible className="absolute right-3 cursor-pointer text-2xl text-primary" />
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Моля попълнете всички полета!');
      return;
    }

    try {
      const data = await login({
        email,
        password,
      });

      userLogin(data);
      toast.success('Успешно влизане!');

      navigate('/admin/pharmacies');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="mx-auto  flex h-screen w-full flex-col items-center justify-center rounded-md bg-white text-black shadow-lg sm:flex-row">
      <div>
        <img
          src={Photo}
          alt="contacts-banner"
          className="w-full object-center sm:h-screen"
        />
      </div>
      <form
        className="flex w-full flex-col items-center p-10"
        onSubmit={submitHandler}
      >
        <div className="justfiy-center mb-5 flex w-full flex-col items-center gap-2">
          <label htmlFor="email" className="self-start text-2xl text-primary">
            Имейл
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border-2 border-primary p-1 text-lg"
          />
          <div
            className="absolute bottom-8 right-2"
            onClick={handleShowPassword}
          >
            {icon}
          </div>
        </div>
        <button className="mt-5 w-full rounded-md bg-primary p-2 text-2xl text-white">
          Вход
        </button>
      </form>
    </section>
  );
};

export default LoginScreen;
