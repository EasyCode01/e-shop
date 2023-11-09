import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FooterIcon from "./FooterIcon";

export default function Footer() {
  return (
    <section className="padding-y pb-4 bg-dark">
      <div className="container">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          <div>
            <h3 className="text-white text-lg lg:text-xl font-bold mb-5">
              Exclusive
            </h3>

            <div className="flex flex-col gap-5">
              <h3 className="text-white max-sm:text-sm">Subscribe</h3>
              <div>
                <p className="text-white max-sm:text-sm">
                  Get 10% off your first order
                </p>
                <div className="relative border-2 border-white rounded-sm p-3 mt-2">
                  <input
                    type="text"
                    className="pr-6 w-full bg-transparent text-deep-gray border-none focus:outline-none"
                    placeholder="Enter your mail"
                  />
                  <div className="absolute top-[25%] right-[15px]">
                    <SendOutlinedIcon className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg lg:text-xl font-bold mb-5">
              Support
            </h3>

            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-white max-sm:text-sm">
                  8&sbquo; Kelin close Ajah
                </h3>
                <h3 className="text-white max-sm:text-sm">
                  Lagos&sbquo; Nigeria
                </h3>
              </div>
              <div>
                <p className="text-white max-sm:text-sm">
                  exclusive@gmail&#8228;com
                </p>
                <p>+234 706 465 5983</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg lg:text-xl font-bold mb-5">
              Account
            </h3>

            <div className="flex flex-col gap-5">
              <h3 className="text-white max-sm:text-sm">My Account</h3>
              <h3 className="text-white max-sm:text-sm">Login / Register</h3>
              <h3 className="text-white max-sm:text-sm">Cart</h3>
              <h3 className="text-white max-sm:text-sm">Whislist</h3>
              <h3 className="text-white max-sm:text-sm">Shop</h3>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg lg:text-xl font-bold mb-5">
              Quick Link
            </h3>

            <div className="flex flex-col gap-5">
              <h3 className="text-white max-sm:text-sm">Privacy Policy</h3>
              <h3 className="text-white max-sm:text-sm">Terms Of Use</h3>
              <h3 className="text-white max-sm:text-sm">Terms Of Use</h3>
              <h3 className="text-white max-sm:text-sm">FAQ</h3>
              <h3 className="text-white max-sm:text-sm">Contact</h3>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg lg:text-xl font-bold mb-5">
              Download App
            </h3>

            <p className="text-white text-sm mb-2">
              save $3 with App new user only
            </p>

            <div className="flex gap-3">
              <div>
                <img src="/images/qr-code.png" alt="qr-code" />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <img src="/images/google-play.png" alt="google-play" />
                </div>

                <div>
                  <img src="/images/apple-store.png" alt="apple store" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <FooterIcon />
            </div>
          </div>
        </div>

        <p className="text-center text-deep-gray mt-12">
          &copy; Copyright Rimel 2023&#8228; All right reserved
        </p>
      </div>
    </section>
  );
}
