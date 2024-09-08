"use client";

import Image from "next/image";
import React from "react";
import { CardBody } from "../ui/3d-card";
import { CardContainer } from "../ui/3d-card";
import { CardItem } from "../ui/3d-card";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="50">
                    <Calendar />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}