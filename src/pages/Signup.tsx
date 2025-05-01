import Header from "../components/SignUp/Header";
import Register from "../components/SignUp/Signup";

const SignUp = () => {
  return (
    <div className="grid bg-primary">
      <div className="">
        <Header />
      </div>
      <div className="relative pt-8">
        <Register />
      </div>
    </div>
  );
};

export default SignUp;
