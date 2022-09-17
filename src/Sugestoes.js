export default function Sugestoes(){
  const sugestoes = [
    {img:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
    {img:"assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
    {img:"assets/img/razoesparaacreditar.svg", nome:"azoesparaacreditar", razao:"Novo no Instagram"},
    {img:"assets/img/adorable_animals.svg", nome:"adorable_animals", razao:"Segue você"},
    {img:"assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"}
  ]
    return(
        <ul class="sugestoes">
          <li class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </li>

          {sugestoes.map((sg) => <li class="sugestao">
            <div class="usuario">
              <img src={sg.img}/>
              <div class="texto">
                <div class="nome">{sg.nome}</div>
                <div class="razao">{sg.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </li>)}
        </ul>
    );
}