import Image from "next/image";
import Link from "next/link";
import photo from "../../public/images/signup-login.png";

export default function SignUpPage() {
  return (
    <section className="mt-20 lg:mt-0 py-8">
      <div className="flex flex-col gap-4 md:flex-row items-center p-2">
        <div className="flex-1 h-[500px] w-full relative">
          <Image
            className="object-cover"
            src={photo}
            alt="Signup Logo"
            quality={100}
            priority
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="flex flex-col w-full gap-3 justify-center items-center flex-1">
          <div className="flex flex-col gap-8 w-4/5 md:w-3/5">
            <div>
              <h2 className="text-xl lg:text-3xl mb-2">Create an account</h2>
              <p className="text-sm">Enter your details below</p>
            </div>

            <form className="flex w-full flex-col gap-5">
              <input
                className="border-b-[1px] border-deep-gray border-solid py-1 focus:outline-none"
                type="text"
                placeholder="Name"
              />

              <input
                className="border-b-[1px] border-deep-gray border-solid py-1 focus:outline-none"
                type="text"
                placeholder="Email or Phone Number"
              />

              <input
                className="border-b-[1px] border-deep-gray border-solid py-1 focus:outline-none"
                type="password"
                placeholder="Password"
              />

              <div className="mt-4 flex flex-col gap-3">
                <button className="btn-primary w-full">Create Account</button>

                <Link
                  className="flex justify-center gap-3 bg-transparent py-2 px-4 border-2 border-deep-gray border-solid rounded-md"
                  href="/"
                >
                  <Image
                    src="/images/icon-google.png"
                    alt="Google icon"
                    width="35"
                    height="35"
                    quality={100}
                  />
                  <p className="">Sign up with Google</p>
                </Link>
              </div>
            </form>

            <p className="flex justify-center items-center gap-2 flex-wrap">
              <small>Already have an account? </small>
              <Link className="underline" href="/login">
                {" "}
                Log in{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
