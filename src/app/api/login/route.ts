import { NextResponse } from "next/server";
import { Logins } from "../logins";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email: string | null = searchParams.get("email")
  const senha: string | null = searchParams.get("senha")

  if (!email) {
    return new NextResponse("Erro ao encontrar dados", { status: 500 })
  }

  if (!senha) {
    return new NextResponse("Erro ao encontrar dados", { status: 500 })
  }
  
  try {
    const infos = Logins("verify",email,senha)

    if (infos) {
      return NextResponse.json({ msg: "Login efetuado", status: 200 })  
    }

  } catch(err) {
    console.error("[GET Register Conta]:", err)
    return new NextResponse("Erro ao encontrar dados", { status: 500 })
  } 
}