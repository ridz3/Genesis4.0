"use client";
import Navbar from "@/components/Navbar";
import {motion} from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
import ParticipateAdvantage from "@/components/ParticipateAdvantage";
import CountAnimation from "@/components/CountAnimation";


export default function Home() {
  const statisticsData = [
    {
      number: 1500,
      label: "Registrations",
      description: "1500+ registrations from across the country.",
    },
    {
      number: 500,
      label: "Offline Participants",
      description: "500+ participants joined the offline hackathon!",
    },
    {
      number: 100,
      label: "Volunteers",
      description: "To help you, get the best out of HackByte.",
    },
    {
      number: 120,
      label: "Projects",
      description: "Innovative submissions from various domains.",
    },
  ];

  const advantages = [
    {
      icon: '/img1.svg',
      heading: 'Collaborate and skill up',
      description: 'Connect with people, form a team, learn new skills and develop amazing projects!'
    },
    {
      icon: '/img2.svg',
      heading: 'Win exciting prizes',
      description: 'Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!'
    },
    {
      icon: '/img3.svg',
      heading: 'Engaging Workshops',
      description: 'Technical workshops and events like no-light event will keep the participants engaged throughout.'
    },
    {
      icon: '/img4.svg',
      heading: 'Mentorship sessions',
      description: 'Get mentorship and guidance from prominent technocrats of the industry.'
    },
    {
      icon: '/img5.svg',
      heading: 'Recruitment offers',
      description: 'Best performers will get recruitment offers from prestigious companies.'
    },
    {
      imgSrc: "/aboutPage/img6.svg",
      title: "Expand network",
      description:
        "Connect with industry professionals and recruiters and other teams to learn and grow more.",
    },
  ];
  const gridImage =
    "https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg?w=2000&t=st=1720271713~exp=1720272313~hmac=4bf0c737de802436d6775db246fd322cc7c497c72c9ea2edee3a1a8cb6b994ba";

  useEffect(() => {


    //the below is code is commented to be considered later
    //the below is the code for rotating the mascot with the scroll
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".mascot",
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // tl.fromTo(
    //   ".mascot",
    //   { rotation: 0, y: 100 },
    //   { rotation: 360, y: 0 }
    // );

    gsap.to(".mascot", {
      y: -20,
      duration: 0.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    }, []);



  useEffect(() => {
    gsap.to(".bounce-svg", {
      y: -20,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="overflow-x-hidden bg-custom-gradient">
      <Navbar />
      <div className=" relative ">
        <img
          src={gridImage}
          alt="grid"
          className="absolute w-full h-full object-cover  text-white mix-blend-overlay opacity-5  blur-sm"
        />
        <div className=" pt-10"></div>
        <div
          className="relative flex flex-col min-h-fit
            md:px-12 xl:px-20  "
        >
          <div className="flex items-center gap-4 flex-col justify-between min-h-[60rem] md:max-h-[70rem] relative">
            <div className="lg:text-[19.7rem] md:text-[12rem] text-white sm:text-[10rem] text-[6rem] sm:block cursor:pointer flex flex-nowrap font-bold tracking-normal px-2 md:px-0">
              GENESIS{" "}
              <span className="text-[50px] ml-8  absolute left-[1380px] top-[290px]  cursor:pointer tracking-normal">
                4.0
              </span>
            </div>

            {/* if the bouncing ball svg is needed the code is below */}
            <div className="bounce-svg absolute top-96 right-1 hidden sm:block md:right-2   lg:right-48 z-20 h-80 w-80 rounded-full bg-transparent backdrop-blur-3xl "></div>

            {/* the code for mascot */}
            <div className="lg:mt-[-27rem]  md:mt-[-15rem] h-[50rem] w-auto sm:h-[70rem] sm:mt-[-13rem]  md:w-full md:h-[70rem] lg:h-[100rem]  max-w-screen-xl mx-auto px-2 sm:px-0">
              <Image
                src="https://s3-alpha-sig.figma.com/img/e22a/e5af/28f38cae7afd544d9e8c5cf6ac6b911b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6Zd~CUMbaNCmAVd3N-2FngI2lYO~oiqmm6JWfc9im2BnpWyC14IgkInillqXYHZlFGGYj-qDMonkL12n~g2MmA5qp0DInbW6M2jEqXTzWKieTlq5b1GRhscoSed4vLD2CctAij-~FHA~Xs8fLC8ZOaQuCynF9s9~f~0aOzemx5oFF4bZmwDKEs9tQC27N8ZVczCnGgyt0swX~Z2ahWKY2AuIOTclQihEHBsyMOVNifgKtXNpubTBL3bc619opYTl4uXCAdIEWn0baYQf3ASpc0MqpBy2DddCafCnDQRPvCz3pB1bAQRRmQ40NA3PT6WOuPN0PvRRYZgmiP7T7NJDw__"
                alt="Mascot Image"
                height={1500}
                width={1500}
                className="w-full h-full object-cover mascot"
              />
            </div>

            <div className="bounce-svg absolute bottom-36 hidden sm:block sm:left-48  md:left-5 lg:left-72 z-20 h-72 w-72 rounded-full bg-transparent backdrop-blur-3xl   "></div>

            <div className=" lg:flex flex-col items-end gap-4">
              <div className="flex gap-6"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col ">
        <motion.div
          className="flex flex-row mt-6 md:mt-8 items-center justify-center"
        >
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={10}/>
            <div className="md:text-3xl text-center text-slate-200">Sponsors</div>
          </div>
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={2000}/>
            <div className="md:text-3xl text-center text-slate-200">Participants</div>
          </div>
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={300000}/>
            <div className="md:text-3xl text-center text-slate-200">Prize Pool</div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center p-4 md:px-12 xl:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start gap-16">
            <div className="w-full flex flex-col items-center gap-5">
              <div className="flex flex-col items-start gap-3">
                <p
                  className="self-stretch text-center text-[#7A7A7A] text-sm md:text-sm
                    lg:text-base font-semibold leading-normal"
                >
                  Opportunities for Participants
                </p>
                <p
                  className="text-center text-[#F5F0D8] text-3xl lg:text-4xl
                    font-medium leading-[44px]"
                >
                  Why participate in Genesis 4.0?
                </p>
              </div>
              <p
                className="text-center text-[#D1CAC7] text-lg lg:text-xl
                  font-normal font-['Inter'] leading-[30px]"
              >
                Genesis 4.0 promises a wonderful experience to the
                participants.
              </p>
            </div>
            <div
              className="flex justify-center flex-wrap mt-12 items-center  rounded-2xl pt-4 md:pt-0">
              {
                advantages.map((advantage, index) => (
                  <ParticipateAdvantage key={index} icon={advantage.icon} heading={advantage.heading}
                                        description={advantage.description}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
