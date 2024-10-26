"use client"

import cylinderImage from "@/assets/cylinder.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll } from "framer-motion";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:bp-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis quasi exercitationem ducimus sit amet, deserunt,
              accusantium, possimus praesentium eveniet dolorem aspernatur
              officiis dolore voluptatum excepturi corporis labore. Atque, eum
              excepturi?
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for Free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5 " />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30,30],

              }}
              transition={{
                repeat: Infinity,
                repeatType:"mirror",
                duration:3,
                ease:"easeInOut"
              }}
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="cylinder Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-30"
              alt={"noodle Image"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
