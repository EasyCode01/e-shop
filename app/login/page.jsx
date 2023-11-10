import Image from "next/image";
import Link from "next/link";
import loginImage from "../../public/images/signup-login.png";

export default function Login() {
  return (
    <main className="mt-24 lg:mt-0 py-8 min-w-screen flex flex-col md:flex-row items-center gap-4 justify-center">
      <div className="flex-1 w-full">
        <div className="h-[500px] relative">
          <Image
            src={loginImage}
            alt="Login image"
            quality={100}
            priority
            style={{
              width: "100%",
              height: "100%",
            }}
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full flex-1 flex items-center">
        <div className="w-4/5 md:w-3/5  mx-auto flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-2">Log in to Exclusive</h1>
          <p className="text-sm mb-4">Enter your details below</p>
          <form className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-gray-400 text-sm focus:outline-none focus:border-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-400 text-sm focus:outline-none focus:border-black"
            />
            <div className="flex items-center justify-between">
              <button className="btn-primary">Log In</button>
              <Link href="/forgot" className="text-sm text-red">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
