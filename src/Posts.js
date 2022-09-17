
export default function Posts(){
  const postagem = [
    {imgUsuario: "assets/img/meowed.svg", imgConteudo: "assets/img/gato-telefone.svg", imgCurtida: "assets/img/respondeai.svg", texto1: "respondeai", texto2: "outras 101.523 pessoas"},
    {imgUsuario: "assets/img/barked.svg", imgConteudo: "assets/img/dog.svg", imgCurtida: "assets/img/adorable_animals.svg", texto1:"adorable_animals", texto2:"outras 99.159 pessoas"}
  ]
    return(
        <ul class="posts">
          {postagem.map((p) => 
          <li class="post">
          <div class="topo">
            <div class="usuario">
              <img src={p.imgUsuario}/>
              meowed
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal" role="img" class="md hydrated" aria-label="ellipsis horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={p.imgConteudo}/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline"></ion-icon>
                <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="chatbubble outline"></ion-icon>
                <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline" role="img" class="md hydrated" aria-label="bookmark outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={p.imgCurtida}/>
              <div class="texto">
                Curtido por <strong>{p.texto1}</strong> e <strong>{p.texto2}</strong>
              </div>
            </div>
          </div>
        </li>
          )}
        </ul>
    );
}