import { useEffect, useState, type FormEvent } from "react";
import { Header } from "../../components/Header";
import Input from "../../components/social/Input";
import { FiTrash } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from "firebase/firestore";

interface LinkProps {
    id: string;
    name: string;
    url: string;
    backgroundColor: string;
    color: string;

}

export default function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [colorInput, setColorInput] = useState("#f1f1f1");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#121212");
    const [links, setLinks] = useState<LinkProps[]>([]);
    useEffect(() => {

        const linksRef = collection(db, "links");
        const queryRef = query(linksRef, orderBy("created", "asc"));
        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista: LinkProps[] = [];

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    backgroundColor: doc.data().backgroundColor,
                    color: doc.data().color
                });
            });

            console.log(lista);
            setLinks(lista);
        });

        return () => unsub();

    }, []);

    async function handleRegister(e: FormEvent) {
        e.preventDefault();
        if (nameInput === '' || urlInput === '') {
            alert("Preencha todos os campos");
            return;
        }
        addDoc(collection(db, "links"), {
            name: nameInput,
            url: urlInput,
            backgroundColor: backgroundColorInput,
            color: colorInput,
            created: new Date()
        }).then(() => {
            console.log("Link cadastrado com sucesso");
            setNameInput("");
            setUrlInput("");
            setColorInput("#f1f1f1");
            setBackgroundColorInput("#121212");
        }).catch((error) => {
            console.log("Erro ao cadastrar link: " + error);
        });
    }

    async function handleDeleteLink(id: string) {
        const docRef = doc(db, "links", id);
        await deleteDoc(docRef);

    }

    return <div className="flex items-center flex-col min-h-screen pb-7 px-2">
        <Header />
        <form className="flex flex-col mt-3 w-full max-w-xl" onSubmit={handleRegister}>
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

        {links.map((link) => (
            <article
                key={link.id}
                className=" flex items-center justify-between  w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
                style={{ backgroundColor: link.backgroundColor, color: link.color }}>
                <p>{link.name}</p>
                <div>
                    <button className="border border-dashed p-1 rounded"

                        onClick={() => handleDeleteLink(link.id)}>
                        <FiTrash size={18} color="#FFF" />
                    </button>
                </div>
            </article>
        ))}


    </div>
}