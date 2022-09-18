import React from 'react';

function PropiedadesDeUsuario(props){
    const[nome, setNome] = React.useState("Catana");
    const[img, setImg] = React.useState("assets/img/catanacomics.svg");
    console.log(nome);
    return(
        <div class="usuario">
          <img onClick={() => setImg(prompt("Digite o link da nova imagem: "))} src={img}/>
          <div class="texto">
            <strong>{props.texto}</strong>
            <span>
              {nome}
              <ion-icon onClick={() => setNome(prompt("Digite o novo nome: "))} name="pencil" role="img" class="md hydrated" aria-label="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}


export default function Usuario(){
    return(
        <PropiedadesDeUsuario texto="catanacomics"/>
    );
}