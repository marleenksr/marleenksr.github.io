import Link from "next/link";

const navigation = [
    {name: "projects", href: "/projects"},
    {name: "portfolio", href: "/portfolio"},
    {name: "contact", href: "/contact"},
    {name: "about", href: "/about"},
];

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="relative flex place-items-center">
                    <h1 className="mb-3 text-4xl sm:text-6xl md:text-9xl font-semibold">
                        marleenksr
                    </h1>
                </div>
            </div>

            <nav className="my-16 animate-fade-in">
                <ul className="flex flex-col items-center justify-center gap-5 sm:flex-row">
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
