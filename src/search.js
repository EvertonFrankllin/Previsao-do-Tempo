
import './Search.css';

function Search(props) {

    function detectSearch(){
    

    let currentValue = document.querySelector('[name=searchInput]')
    .value;

    /*
    Fazendo minha requisição em realtime
    alert(currentValue)
    */
}

  return (
    <div className="Search">
        <h3>Clima e Previsão do Tempo / Cidade / Previsão do tempo 15 dias ou Real Time / </h3>
      <input placeholder={props.placeholder} onKeyUp={detectSearch} type="text"  name='searchInput'></input>
    </div>
  );

}

export default Search;