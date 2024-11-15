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
                        originally from hamburg and living in copenhagen since 2021.
                        i have a background in mechatronics (university of applied sciences hamburg) and electrical engineering with a focus on automation and robot technology (technical university of denmark).
                        <br/>
                        currently working as a software engineer in an ev charging management platform scale-up called monta.
                        have spent the last years programming in different languages like java, kotlin, c++, php, react.
                        <br/>
                        apart from my work, i love doing sports, building things and capturing moments with my camera.
                        passionate about anything tech-related, sustainability and plant-based food.
                        if you have any questions feel free to reach out.
                    </p>
                </div>
            </div>
        </div>
    );
}