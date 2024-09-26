import { TipoProduto } from "@/types";
import { promises as fs} from "fs"
import { NextResponse } from "next/server";

export async function GET(){
    
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos = JSON.parse(file);

    return NextResponse.json(produtos);
}
export async function POST(request:Request,response:Response){
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos : TipoProduto[] = JSON.parse(file);

    const {nome,preco,estoque} = await request.json();
    const produto = {nome,preco,estoque} as TipoProduto;
    produto.id = (produtos[produtos.length-1].id + 1)

    produtos.push(produto);

    const fileUpdate = JSON.stringify(produtos)
    await fs.writeFile(process.cwd() + '/src/data/base.json',fileUpdate);

    return NextResponse.json(produto)
}

