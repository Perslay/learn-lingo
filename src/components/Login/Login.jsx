import css from "./Login.module.css";

export const Login = () => {
  return (
    <div className={css.loginDiv} id="login-div">
      <div className={css.loginWindow}>
        <p>x</p>
        <h2 className={css.heading}>Log In</h2>
        <p className={css.paragraph}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a teacher.
        </p>
        <form action="">
          <label className={css.label} for="login-email">
            Email
          </label>
          <input
            className={css.input}
            id="login-email"
            type="email"
            required
            placeholder="Email"
          />
          <label className={css.label} for="login-password">
            Password
          </label>
          <input
            className={css.input}
            id="login-password"
            type="password"
            required
            placeholder="Password"
          />
          <button className={css.submit} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
