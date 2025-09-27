import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-zinc-900 text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl">Página não encontrada</p>

            <Link to="/" className="mt-6 text-blue-500 hover:underline">
                Voltar para a página inicial
            </Link>
        </div>
    )
}