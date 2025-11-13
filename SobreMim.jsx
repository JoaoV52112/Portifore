import TextoPrincipal from "../components/TextoPrincipal"
import TextoSimpres from "../components/TextoSimpres"
import "./SobreMim.css"

export default function Sobre () {


return(
    <section>
        <div class="conteiner-texto" >
            <TextoPrincipal 
            texto={"Sobre mim"} />

            <TextoSimpres
            texto={"Ola meu nome e João Vitor eu sou um aluno estudante do Marista escola social.Eu curto jogos  e animes"}
        />
                   <TextoSimpres
            texto={"É curto muito carros tipo BMW motos e tambem video Games "}
        
        />
                    <TextoSimpres
            texto={"tipo este carro"}
        
        />
       
<img src="https://planetcars.com.br/wp-content/uploads/2023/12/bmw-m2-3.webp" />

        </div>
    </section>
)
}