export default function Home() {
    return (
        <div className="flex flex-col w-fuull py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Marcelo Augusto Soares Gomes</h1>
            <span className="text-gray-50 mb-5 mt-3">Meus links 👇</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                    <a>
                        <p className="md:text-lg text-base">Canal no Youtube</p>
                    </a>
                </section>
                <footer className="flex justify-center gap-3 my-4">

                </footer>
            </main>

        </div>
    )
}