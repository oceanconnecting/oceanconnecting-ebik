import Button from "@/components/Button";
import Image from "next/image";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-12 md:py-20">
      <div className="bg-accent-900 size-32 absolute left-[90px] -z-10 filter blur-3xl" />
      <div className="bg-primary-800 size-32 absolute bottom-1/2 right-[90px] -z-10 filter blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300/10 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="md:text-left text-center mb-8 mx-8 md:ml-16 md:mb-0">
          <div className="inline-flex items-center border bg-gradient-to-t from-background-900 to-white shadow-md border-background-950 gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="flex justify-center -space-x-2">
              {["/hero/p1.jpg", "/hero/p2.jpg", "/hero/p3.jpg"].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center overflow-hidden"
                >
                  <Image src={i} width={100} height={100} alt="" />
                </div>
              ))}
            </div>
            <span className="text-xs font-medium">
              Loved and Trusted by millions of people
            </span>
          </div>

          <h1 className="font-sora text-4xl font-extrabold lg:text-5xl">
            Deliver Packages Efficiently.
            <strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-400 block mt-2">
              Fast and Reliable.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-text-300">
            Experience the best delivery service with our state-of-the-art
            logistics. We ensure your packages arrive on time, every time.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button variant="primary" href="#">
              Get Started
            </Button>

            <Button variant="secondary" href="#">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative max-w-xs md:max-w-sm mx-auto md:mx-0">
            <div className="relative z-10 overflow-hidden p-2">
              <Image
                src="/hero/hero image.png"
                alt="Delivery service illustration"
                width={300}
                height={225}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="absolute top-[-15px] right-[-10px] w-16 h-16 bg-gradient-to-br from-primary-500/30 to-primary-500/10 rounded-full z-0 animate-pulse"></div>
          <div className="absolute bottom-[20px] left-[-10px] w-12 h-12 bg-gradient-to-tr from-blue-400/40 to-blue-400/10 rounded-lg z-0"></div>
          <div className="absolute top-[40%] right-[-15px] w-16 h-16 bg-gradient-to-bl from-yellow-300/30 to-yellow-300/10 rounded-lg rotate-12 z-0"></div>

          <div className="absolute top-[40%] left-[5%] hover:scale-105 duration-300 transition-all bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md z-20 rotate-[-5deg] hover:rotate-0 max-w-[180px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500/30 to-blue-500/30 flex items-center justify-center">
                <Image
                  src="/hero/p4.jpg"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-xs font-semibold">Sarah K.</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs">
              "Their fast delivery saved my business! Packages always arrive on
              time."
            </p>
          </div>

          <div className="absolute hover:scale-105 duration-300 transition-all bottom-[15%] right-[10%] bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md z-20 hover:rotate-0 rotate-[5deg]">
            <p className="text-xs md:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
