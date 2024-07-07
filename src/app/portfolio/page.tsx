"use client";
import {Navigation} from "../components/nav";
import React from "react";

const photos = [
    "/portfolio/blue_mountains.jpeg",
    "/portfolio/sydney_market.jpeg",
    "/portfolio/cathedral_cove.jpeg",
    "/portfolio/ponsonby.jpeg",
    "/portfolio/bb_headquarter.jpeg",
    "/portfolio/church_of_our_saviour.jpeg",
    "/portfolio/glyptoteket.jpeg",
    "/portfolio/stockholm.jpeg",
    "/portfolio/new_zealand.jpeg",
    "/portfolio/german_coast_ride.jpeg",
    "/portfolio/gasoline_grill.jpeg",
    "/portfolio/berlin_backyard.jpeg",
    "/portfolio/berlin_fernsehturm.jpeg",
    "/portfolio/kraess_store.jpeg",
    "/portfolio/berlin_block.jpeg",
    "/portfolio/napoli_centrale.jpeg",
    "/portfolio/flowers_sydney.jpeg",
    "/portfolio/louisiana_museum.jpeg",
    "/portfolio/marmorkirken.jpeg",
    "/portfolio/fredericiagade.jpeg",
    "/portfolio/tivoli.jpeg",
];

export default function Example() {
    return (
        <div className="relative pb-16">
            <Navigation/>
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        portfolio
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        captured on film with an olympus mju-1
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    {photos.map((photo, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={photo}
                                alt={`Analogue Photo ${index + 1}`}
                                className="object-cover w-full h-80 rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
