import { NextResponse } from "next/server";
import { Senhas } from "../senha";
import { Logins } from "../logins";

export async function POST(req: Request) {
  const body = await req.json();  
  const { email, senha} = body;
  
  try {
    const senhaHash = await Senhas("Hash", senha);
  
    if (typeof senhaHash !== "string") {
      return new NextResponse("Erro ao gerar senha", { status: 500 });
    }

    const criar = Logins("add",email, senha)
    console.log(criar)
    return NextResponse.json({ msg: "Usuário cadastrado", status: 201 })
  } catch(err) {
    console.error("[POST Register Conta]:", err)
    return new NextResponse("Erro ao encontrar dados", { status: 500 })
  } 
}