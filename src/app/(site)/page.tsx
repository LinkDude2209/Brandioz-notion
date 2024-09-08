import React from "react";
import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from '../../../public/appBanner.png'
import Cal from '../../../public/cal.png'
import Diamond from '../../../public/diamond.svg'
import Check from '../../../public/check.svg'
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS, } from '@/lib/constants';
import CustomCard from "@/components/landing-page/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import clsx from 'clsx';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
import { Carousel, CarouselContext } from "@/components/ui/apple-cards";
import { AppleCardsCarouselDemo } from "@/components/landing-page/apple-card";
import { FlipWordsDemo } from "@/components/landing-page/words";
import { Globe } from "@/components/landing-page/sectionac";
import { CoverDemo } from "@/components/landing-page/fast";
import LineDrawingAnimation from "@/components/landing-page/anime";
import { SpotlightPreview } from "@/components/landing-page/spotlightpull";
import { MacbookScrollDemo } from "@/components/landing-page/mac";
import { ThreeDCardDemo } from "@/components/landing-page/cardone";
import FunctionBasedValuesDemo from "@/components/landing-page/articles";




const HomePage = () => {
    return (
        <>
            <section
                className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      pb-40
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
            >
                <SpotlightPreview />

                <LineDrawingAnimation />

                <div
                    className="md:mt-[-90px]
        sm:w-full
        w-[750px]
        flex
        justify-between
        items-center
        mt-[140px]
        relative
        sm:ml-0
        ml-[-50px]"
                >
                    <FlipWordsDemo />
                    <Globe />


                </div>
                <MacbookScrollDemo />
                <div
                    className="md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[140px]
          relative
          sm:ml-0
          ml-[-50px]
        "
                >
                    <AppleCardsCarouselDemo />


                    <div
                        className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
                    ></div>

                </div>
                <CoverDemo />
            </section>
            <section className="relative">
                <div
                    className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0

        before:w-20
          before:z-10
          before:absolute
        "
                >
                    {[...Array(2)].map((arr) => (
                        <div
                            key={arr}
                            className="flex
                flex-nowrap
                animate-slide
          "
                        >
                            {CLIENTS.map((client) => (
                                <div
                                    key={client.alt}
                                    className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                                >
                                    <Image
                                        src={client.logo}
                                        alt={client.alt}
                                        width={200}
                                        className="object-contain max-w-none"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <section
                className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      "
            >
                <div
                    className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22
        "/>
                <TitleSection
                    title="Keep track of your meetings all in one place"
                    subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
                    pill="Features"
                />
                <div
                    className="mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-8
          border-washed-purple-300 
          border-opacity-10
        "
                >
                    <Image
                        src={Cal}
                        alt="Banner"
                        className="rounded-2xl"
                    />
                </div>
            </section>
            <section className="relative">

                <div
                    className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
                >

                </div>
            </section>
            <section
                className="mt-20
        px-4
        sm:px-6
      "
            >
                <ThreeDCardDemo />
                <FunctionBasedValuesDemo />
                <FunctionBasedValuesDemo />
            </section>

        </>
    )
}
export default HomePage;
