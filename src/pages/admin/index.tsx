import { useState } from "react";
import { Header } from "../../components/Header";
import Input from "../../components/social/Input";
import { FiTrash } from "react-icons/fi";

export default function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [colorInput, setColorInput] = useState("#f1f1f1");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#121212");
    return <div className="flex items-center flex-col min-h-screen pb-7 px-2">
        <Header />
        <form className="flex flex-col mt-3 w-full max-w-xl">
            <label className="text-white font-medium mt-2 mb-2">Nome do link</label>
            <Input placeholder="Digite o nome do link"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)} />
            <label className="text-white font-medium mt-2 mb-2">Url do link</label>
            <Input placeholder="Digite o nome do link"
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)} />

            <section className="flex justify-center my-4 gap-5 mt-4">
                <div className="flex gap-2 items-center">
                    <label className="text-white font-medium mt-2 mb-2">Cor do link</label>
                    <input type="color"
                        value={colorInput}
                        onChange={(e) => setColorInput(e.target.value)} />
                </div>
                <div className="flex gap-2 items-center">
                    <label className="text-white font-medium mt-2 mb-2">Fundo do link</label>
                    <input type="color"
                        value={backgroundColorInput}
                        onChange={(e) => setBackgroundColorInput(e.target.value)} />
                </div>
            </section>

            {nameInput !== '' && (
                <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                    <label className="text-white font-medium mt-2 mb-3">Veja com está ficando :</label>
                    <article className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                        style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput, color: colorInput }}>
                        <p style={{ color: colorInput }} className="md:text-lg text-base">{nameInput}</p>
                    </article>
                </div>
            )}
            <button type="submit" className="mb-7 bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center">Cadastrar</button>
        </form>

        <h2 className="font-bold text-white mb-4 text-2xl">Meus Links</h2>

        <article className=" flex items-center justify-between  w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
            style={{ backgroundColor: "#2563EB", color: "#FFF" }}
        >
            <p>Canal do Youtube</p>
            <div>
                <button className="border border-dashed p-1 rounded">
                    <FiTrash size={18} color="#FFF" />
                </button>
            </div>
        </article>

    </div>
}