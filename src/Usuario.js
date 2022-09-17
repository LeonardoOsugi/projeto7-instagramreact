function PropiedadesDeUsuario(props){
    return(
        <div class="usuario">
          <img src={props.src}/>
          <div class="texto">
            <strong>{props.texto}</strong>
            <span>
              {props.nome}
              <ion-icon name="pencil" role="img" class="md hydrated" aria-label="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}


export default function Usuario(){
    return(
        <PropiedadesDeUsuario src="assets/img/catanacomics.svg" texto="catanacomics" nome="Catana"/>
    );
}