import React from "react";
import {Navigation} from "../components/nav";
import {Card} from "@/app/components/card";
import Link from "next/link";

export default async function ProjectsPage() {

    const featured = {
        slug: "dining",
        title: "dining",
        description: "oak tree dining table with steel legs",
        date: "2017",
    };

    const top2 = {
        slug: "dresses",
        title: "dresses",
        description: "collection of hand-made dresses",
        date: "2019",
    }

    const top3 = {
        slug: "shelf",
        title: "shelf",
        description: "metal shelf",
        date: "2020",
    }

    return (
        <div className="relative pb-16">
            <Navigation/>
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        projects
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        some recent projects
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link href={`/projects/${featured.slug}`}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-xs text-zinc-100">
                                        {featured.date ? featured.date : (
                                            <span>SOON</span>
                                        )}
                                    </div>
                                </div>

                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                >
                                    {featured.title}
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                            </article>
                        </Link>
                    </Card>

                    <div
                        className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        <Card>
                            <Link href={`/projects/${top2.slug}`}>
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="text-xs text-zinc-100">
                                            {top2.date ? top2.date : (
                                                <span>SOON</span>
                                            )}
                                        </div>
                                    </div>

                                    <h2
                                        id="featured-post"
                                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                    >
                                        {top2.title}
                                    </h2>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        {top2.description}
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>

                    <div
                        className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        <Card>
                            <Link href={`/projects/${top3.slug}`}>
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="text-xs text-zinc-100">
                                            {top3.date ? top3.date : (
                                                <span>SOON</span>
                                            )}
                                        </div>
                                    </div>

                                    <h2
                                        id="featured-post"
                                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                    >
                                        {top3.title}
                                    </h2>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        {top3.description}
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}