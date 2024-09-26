
export default function Produto({params}:{params:{id:number}}) {
  return (
    <div>
        <h2>Produto</h2>
        <div>
            <h3>ID: {params.id}</h3>
        </div>
    </div>
  )
}
