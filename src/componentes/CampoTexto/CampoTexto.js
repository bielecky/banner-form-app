import'./CampoTexto.css'
const CampoTexto = (props) => {
   
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}/>  {/* Corrigido: auto-fechar a tag input */}
        </div>
    );
};

export default CampoTexto;
