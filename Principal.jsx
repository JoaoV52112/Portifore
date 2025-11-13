
import TextoDestacado from "../components/TextoDestacado"
import TextoPrincipal from "../components/TextoPrincipal"
import TextoSimpres from "../components/TextoSimpres"
import "./Principal.css"


export default function Principal () {


return(
    
        
    <section>
    <TextoDestacado
     texto="Ola meu nome e "/>
     
        <div class="conteiner-texto" >
            <TextoPrincipal 
            texto={"Joao Vitor "} />

            <TextoSimpres
            texto={"Sou aluno do ensino medioa da escola marista escola social em cascavel "}
            />
            <button>
                CONTATO
            </button>           
        </div>
    </section>
    
 
)
}