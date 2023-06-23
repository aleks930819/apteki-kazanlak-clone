const LoginScreen = () => {
  return (
    <section className="mx-auto rounded-md mb-10 mt-10 flex w-[40vw] items-center justify-center bg-white text-black shadow-lg">
      <form className=" flex flex-col items-center p-10">
        <div className="justfiy-center mb-5 flex flex-col items-center gap-2">
          <label htmlFor="email" className="text-2xl text-primary">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="rounded-md border-2 border-primary p-1"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="password" className="text-2xl text-primary">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="rounded-md border-2 border-primary
            p-1
            "
          />
        </div>
      </form>
    </section>
  );
};

export default LoginScreen;
