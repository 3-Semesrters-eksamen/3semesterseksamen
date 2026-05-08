import LoginContainer from "@/components/(Login components)/LoginContainer";
import Btn from "@/components/(globalComponents)/Btn";
import Footer from "@/components/(footer components)/Footer";

export default function Login() {
  return (
    <>
      <LoginContainer />
      <div className="bg-black p-10 inline-block">
        <Btn label="Sign In" />
      </div>
      <Footer />
    </>
  );
}
