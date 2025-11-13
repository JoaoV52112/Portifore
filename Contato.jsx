import TextoPrincipal from "../components/TextoPrincipal"
import TextoSimpres from "../components/TextoSimpres"
import "./Contato.css"

export default function Contato () {


return(
    <section>
        <div class="conteiner-texto" >
            <TextoPrincipal 
            texto={"Eu gostaria muito ter contato com migo "} />

            <TextoSimpres
            texto={"entre contato este gmail joaovitor@gmail.com"}
        />
                   <TextoSimpres
            texto={"É curto muito carros tip BMW motos e tambem video Games "}
        
        />
             
        
         <button>
                CONTATO
            </button>   
       


        </div>
    </section>
)
}