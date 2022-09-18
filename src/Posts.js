import React from 'react';

function RenderizarPosts(props){
  const [save, setSave] = React.useState("bookmark-outline");
  const[heart, setHeart] = React.useState("heart-outline");
  const[red, setRed] = React.useState("black");
  const [curtidas1, setCurtidas] = React.useState(props.curtidas);

  function heartMark(){
    if(heart === "heart-outline" && red === "black"){
      setHeart("heart");
      setRed("red");
      setCurtidas(curtidas1 + 1);
    }else{
      setHeart("heart-outline");
      setRed("black")
      setCurtidas(curtidas1 - 1);
    }
  }
  function marcado(){
    if(save === "bookmark-outline"){
      setSave("bookmark");
    }else{
      setSave("bookmark-outline");
    }
  }
  return(
          <li class="post">
          <div class="topo">
            <div class="usuario">
              <img src={props.imgUsuario}/>
              meowed
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal" role="img" class="md hydrated" aria-label="ellipsis horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={props.imgConteudo}/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon onClick={heartMark} name={heart} role="img" class={red} aria-label={heart}></ion-icon>
                <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="chatbubble outline"></ion-icon>
                <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={marcado} name={save} role="img" class="md hydrated" aria-label={save}></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={props.imgCurtida}/>
              <div class="texto">
                Curtido por <strong>{props.texto1}</strong> e <strong>outras {curtidas1} pessoas</strong>
              </div>
            </div>
          </div>
        </li>
  )
}

export default function Posts(){
  const postagem = [
    {imgUsuario: "assets/img/meowed.svg", imgConteudo: "assets/img/gato-telefone.svg", imgCurtida: "assets/img/respondeai.svg", texto1: "respondeai", curtidas: 101523 },
    {imgUsuario: "assets/img/barked.svg", imgConteudo: "assets/img/dog.svg", imgCurtida: "assets/img/adorable_animals.svg", texto1:"adorable_animals",  curtidas: 99159 }
  ];
    return(     
      <ul class="posts">
        {postagem.map((p) =>
        <RenderizarPosts imgUsuario={p.imgUsuario} imgConteudo={p.imgConteudo} imgCurtida={p.imgCurtida} texto1={p.texto1} curtidas={p.curtidas}/>
        )}
      </ul>
    );
  }

// import React from 'react';

// export default function Posts(){
//   const [save, setSave] = React.useState("bookmark-outline");
//   const[heart, setHeart] = React.useState("heart-outline");
//   const[red, setRed] = React.useState("black");
//   let like = 101523;
//   let like1 = 99159;
//   const postagem = [
//     {imgUsuario: "assets/img/meowed.svg", imgConteudo: "assets/img/gato-telefone.svg", imgCurtida: "assets/img/respondeai.svg", texto1: "respondeai", curtidas: 101523 },
//     {imgUsuario: "assets/img/barked.svg", imgConteudo: "assets/img/dog.svg", imgCurtida: "assets/img/adorable_animals.svg", texto1:"adorable_animals",  curtidas: 99159 }
//   ];

//   const [curtidas1, setCurtidas] = React.useState(like);

//   function heartMark(){
//     if(heart === "heart-outline" && red === "black"){
//       setHeart("heart");
//       setRed("red");
//       setCurtidas(curtidas1 + 1);
//     }else{
//       setHeart("heart-outline");
//       setRed("black")
//       setCurtidas(curtidas1 - 1);
//     }
//   }
//   function marcado(){
//     if(save === "bookmark-outline"){
//       setSave("bookmark");
//     }else{
//       setSave("bookmark-outline");
//     }
//   }
//     return(
//         <ul class="posts">
//           {postagem.map((p) => 
//           <li class="post">
//           <div class="topo">
//             <div class="usuario">
//               <img src={p.imgUsuario}/>
//               meowed
//             </div>
//             <div class="acoes">
//               <ion-icon name="ellipsis-horizontal" role="img" class="md hydrated" aria-label="ellipsis horizontal"></ion-icon>
//             </div>
//           </div>

//           <div class="conteudo">
//             <img src={p.imgConteudo}/>
//           </div>

//           <div class="fundo">
//             <div class="acoes">
//               <div>
//                 <ion-icon onClick={heartMark} name={heart} role="img" class={red} aria-label={heart}></ion-icon>
//                 <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="chatbubble outline"></ion-icon>
//                 <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline"></ion-icon>
//               </div>
//               <div>
//                 <ion-icon onClick={marcado} name={save} role="img" class="md hydrated" aria-label={save}></ion-icon>
//               </div>
//             </div>

//             <div class="curtidas">
//               <img src={p.imgCurtida}/>
//               <div class="texto">
//                 Curtido por <strong>{p.texto1}</strong> e <strong>outras {curtidas1} pessoas</strong>
//               </div>
//             </div>
//           </div>
//         </li>
//           )}
//         </ul>
//     );
// }