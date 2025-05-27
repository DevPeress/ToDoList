'use client'
    
import { useRouter } from "next/navigation";
import { useState } from "react"

interface Dados {
    senha: string,
    email: string
}

export default function Register() {
    const router = useRouter();
    
    const [dados,setDados] = useState<Dados>({ email: "", senha: ""})

    const alterarDados = (tipo: string, valor: string) => {
        setDados((prevDados) => ({
            ...prevDados,
            [tipo]: valor
        }))
    }

    const email = dados.email
    const emailV = email.length > 4 && email.includes("@")

    const senha = dados.senha
    const senhaV = senha.length > 4

    const verifyLogin = () => {
        if (!emailV || !senhaV) {
           return alert("Email ou senha estão incorretos!")
        }

        fetch(`/api/registro`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                senha
            })
        })
        .then(res => res.json())
        .then(data => { 
            if (data) {
                if (data.status === 201) {
                    router.push('/pagina')
                } else {
                    return alert(data.msg)
                }
            } else {
                alert("E-mail ou Senha estão incorretos!")
            }
         })
        .catch((err) => alert("Não foi encontrado os dados! Recarregue a Página"))
    }

    const login = () => {
        router.push('/login')
    }
    
    return(
        <div className="absolute w-full min-h-screen bg-[#090E23] overflow-hidden">
            <div className="flex absolute w-full min-h-screen bg-white items-center justify-center select-none">
                <div className="flex absolute w-[20.833vw] h-[22.969vw]">
                    <h1 className="absolute top-[2vw] text-[2vw] text-[#111827]">Bem-Vindo</h1>
                    <h2 className="absolute top-[5vw] text-[1vw] text-[#6B7280]">Efetue seu registro</h2>

                    <div className="absolute w-auto h-[1vw] top-[7vw] text-[.6vw] text-[#5048E5] border-b border-[#5048E5]">Email</div>
                    <div className="absolute w-full h-[2.5vw] rounded top-[9vw] border-[#D1D5DB] border-1 overflow-hidden">
                        <input className="absolute w-[98%] h-full outline-0 p-2" type="email" value={dados.email} onChange={(e) => alterarDados("email",e.target.value)} />
                    </div>
                    <h1 className="flex absolute w-[4vw] top-[8.6vw] left-[.5vw] text-[.5vw] text-[#6B7280] bg-white justify-center">Email</h1> 
                        <div className="absolute w-full h-[2.5vw] rounded top-[12vw] border-[#D1D5DB] border-1 overflow-hidden">
                            <input className="absolute w-[98%] h-full outline-0 p-2" type="password" value={dados.senha} onChange={(e) => alterarDados("senha",e.target.value)} />
                        </div>
                        <h1 className="flex absolute w-[4vw] top-[11.6vw] left-[.5vw] text-[.5vw] text-[#6B7280] bg-white justify-center">Senha</h1> 

                    <button className="absolute top-[16vw] w-full h-[3vw] bg-[#5048E5] rounded text-[#FFFFFF] text-[1vw] items-center justify-center hover:scale-110" onClick={verifyLogin}>Continuar</button>
                    <button className="absolute top-[20vw] w-full h-[3vw] bg-[#5048E5] rounded text-[#FFFFFF] text-[1vw] items-center justify-center hover:scale-110" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}
