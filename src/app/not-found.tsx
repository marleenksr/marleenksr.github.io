export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="relative flex place-items-center flex-col">
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        404
                    </h1>
                    <p className="mt-4 text-zinc-400">
                        page not found
                    </p>
                </div>
            </div>
        </main>
    );
}
