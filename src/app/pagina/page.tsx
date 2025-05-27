'use client'

import { useState } from "react"

export default function Pagina() {
    const [fazer, setFazer] = useState<string[]>([])
    const [mensagem, setMensagem] = useState("")

    const Adicionar = () => {
        if (mensagem.trim() === "") return

        setFazer((prev) => [...prev, mensagem])
        setMensagem("")
    }

    const Excluir = (indexToRemove: number) => {
        setFazer((prev) => prev.filter((_, index) => index !== indexToRemove))
    }

    return (
        <div className="flex absolute w-full min-h-screen overflow-hidden items-center justify-center">
            <div className="flex absolute w-full h-[2vw] top-[5vw] items-center justify-center">
                <input
                    type="text"
                    className="flex w-[50vw] h-[2vw] bg-gray-500 rounded text-[1vw] text-white p-5"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
                <button className="flex w-[5vw] h-full ml-4 items-center justify-center bg-red-500 rounded p-5 hover:scale-110" onClick={Adicionar}>
                    Adicionar
                </button>
            </div>

            <div className="flex flex-col absolute w-[50vw] h-auto top-[10vw] rounded flex-wrap space-y-2 items-center justify-center">
                {fazer.map((item, index) => (
                    <>
                        <div key={index} className="flex relative w-full h-[2vw] right-[2.8vw] bg-gray-500 items-center justify-start pl-[1vw] text-white text-[1vw] rounded">
                            <span className="flex w-full h-full overflow-hidden items-center">{item}</span>
                            <button className="flex absolute w-[5vw] h-[2vw] right-[0vw] items-center justify-center bg-red-500 rounded p-5 hover:scale-110" onClick={() => Excluir(index)}>Excluir</button>
                        </div>
                    </> 
                ))}
            </div>
        </div>
    )
}
