import { useState } from "react";
import css from "./Home.module.css";
import { Header } from "../../components/Header/Header";
import { MainHome } from "../../components/MainHome/MainHome";
import { Login } from "../../components/Login/Login";

const Home = () => {
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(false);
  // const toggleLogin = () => {
  //   setIsLoginWindowOpen((prev) => !prev);
  // };

  return (
    <div className={css.home}>
      <Header
        isLoginWindowOpen={isLoginWindowOpen}
        setIsLoginWindowOpen={setIsLoginWindowOpen}
      />
      <MainHome />
      {isLoginWindowOpen && <Login />}
    </div>
  );
};

export default Home;
