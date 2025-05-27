import { NextResponse } from "next/server";
import { Logins } from "../logins";

export async function POST(req: Request) {
  const body = await req.json();  
  const { email, senha} = body;
  
  try {

    const criar = Logins("add",email, senha)
    console.log(criar)
    return NextResponse.json({ msg: "Usuário cadastrado", status: 201 })
  } catch(err) {
    console.error("[POST Register Conta]:", err)
    return new NextResponse("Erro ao encontrar dados", { status: 500 })
  } 
}
