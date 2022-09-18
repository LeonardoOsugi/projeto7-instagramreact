export default function Stories(){
    const contStorie = [
        {src:"assets/img/9gag.svg", texto: "9gag"},
        {src: "assets/img/meowed.svg" , texto:"meowed"},
        {src: "assets/img/barked.svg", texto:"barked"},
        {src: "assets/img/nathanwpylestrangeplanet.svg", texto:"nathanwpylestrangeplanet"},
        {src: "assets/img/wawawicomics.svg", texto:"wawawicomics"},
        {src: "assets/img/respondeai.svg", texto:"respondeai"},
        {src: "assets/img/filomoderna.svg", texto:"filomoderna"},
        {src: "assets/img/memeriagourmet.svg", texto:"memeriagourmet"}
    ]
    return(
        <ul class="stories">
            {contStorie.map((s) => <li class="story">
            <div class="imagem">
              <img src={s.src}/>
            </div>
            <div class="usuario">
              {s.texto}
            </div>
            <div class="setinha">
               <ion-icon name="chevron-forward-circle" role="img" class="md hydrated" aria-label="chevron forward circle"></ion-icon>
            </div>
          </li>)}
        </ul>
    );
}