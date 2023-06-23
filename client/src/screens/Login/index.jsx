const LoginScreen = () => {
  return (
    <section className="flex  items-center justify-center bg-white text-black">
      <form className="border-1 flex flex-col items-center border-black">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
      </form>
    </section>
  );
};

export default LoginScreen;
