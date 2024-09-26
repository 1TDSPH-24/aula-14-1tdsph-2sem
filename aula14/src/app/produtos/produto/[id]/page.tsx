"use client";
import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";


export default function Produto({params}:{params:{id:number}}) {

  const [produto, setProduto] = useState<TipoProduto>()

  useEffect(() => {
      const chamadaApi = async () => {
          const response = await fetch(`http://localhost:3000/api/base-produtos/${params.id}`);
          const data = await response.json();
          console.log(data);
          setProduto(data);
      }
      chamadaApi();
  }, []);


  return (
    <div>
        <h2>Produto</h2>
        <div>
            <h3>ID: {params.id}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>{produto?.id}</td>
                        <td>{produto?.nome}</td>
                        <td>{produto?.preco}</td>
                        <td>{produto?.estoque}</td>   
                      </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>Total de produtos: 1</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}
