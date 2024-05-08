
import './Search.css';

function Search(props) {

    function detectSearch(e){
      e.preventDefault();
    

    let currentValue = document.querySelector('[name=detectSearch]')
    .value;
    /*
    Fazendo minha requisição em realtime
    alert(currentValue)
    */
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

        fetch(url)

        .then(response=> response.json())

        .then(data=>{

            const {main, name, sys, weather} = data;

            if(sys != undefined)

                console.log(sys);

            if(weather != undefined)

                console.log(weather[0]['description']);

        })

    

    }

  return (
    <div className="Search">
        <h3>Clima e Previsão do Tempo / Cidade / Previsão do tempo 15 dias ou Real Time / </h3>

        <form onSubmit={(e)=>detectSearch(e)}>

          <input placeholder={props.placeholder} type="text"  name='detectSearch'></input>
          <input type="submit" value="Buscar!" ></input>

        </form>
    </div>
  );

}

export default Search;