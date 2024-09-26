import { TipoProduto } from "@/types";
import { promises as fs, writeFile} from "fs"
import { NextResponse } from "next/server";

export async function GET(){
    
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos = JSON.parse(file);

    return NextResponse.json(produtos);
}


export async function POST(request:Request, response:Response){
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos = JSON.parse(file);

    const {nome, preco, estoque} = await request.json();

    // Criar um id no novo OBJETO que será inserido no base.json.
    const produto = {nome, preco, estoque} as TipoProduto;
    produto.id = (produtos[produtos.length-1].id + 1)

    //Inserir  o n vo produto que já possui inclusive ID na lista de produtos:
    produtos.push(produto);

    //Processo de manipulção do arquivo com promises e process.cwd para colocar a lista no arquivo e atualizar ele
    
    //1 - Convertendo a lista em String
    const fileUpdate = JSON.stringify(produtos);
    //2 - Escrevendo no arquivo através do caminho especificado
    await fs.writeFile(process.cwd() + '/src/data/base.json', fileUpdate);

    return NextResponse.json(produto)

}

// export async function PUT(){}

// export async function DELETE(){}

// export async function PATCH(){}