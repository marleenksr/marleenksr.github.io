"use client";
import {Navigation} from "../components/nav";
import React from "react";

export default function Example() {
    return (
        <div className="relative pb-16">
            <Navigation/>
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-4xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        about
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Hi there! I'm Marleen, originally from Hamburg and living in Copenhagen since 2021.
                        I have a background in Mechatronics (University of Applied Sciences Hamburg) and Electrical Engineering with a focus on Automation and Robot Technology (Technical University of Denmark).
                        <br/>
                        Currently working as a Software Engineer in an EV charging management platform scale-up called Monta.
                        Have spent the last years programming in different languages like Java, Kotlin, C++, PHP, React.
                        <br/>
                        Apart from my work, I love doing sports, building things and running around with my camera.
                        Passionate about anything tech-related, sustainability and plant-based food.
                        If you have any questions feel free to reach out.
                    </p>
                </div>
            </div>
        </div>
    );
}