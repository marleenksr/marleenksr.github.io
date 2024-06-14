import Image from "next/image";
import Link from "next/link";

const navigation = [
    {name: "Projects", href: "/projects"},
    {name: "Portfolio", href: "/portfolio"},
    {name: "Contact", href: "/contact"},
    {name: "About", href: "/about"},
];

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div
                    className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                    <h1 className="mb-3 text-4xl sm:text-6xl md:text-9xl font-semibold">
                        marleenksr
                    </h1>
                </div>
            </div>

            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-5">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            <h2 className="mb-3 text-2xl font-semibold">
                                {item.name}{" "}
                                <span
                                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                                </span>
                            </h2>
                        </Link>
                    ))}
                </ul>
            </nav>
        </main>
    );
}
