import {useState} from 'react';
import './Search.css';

function Search(props) {

  const [cidade, setCidade] = useState("");

    function detectSearch(e){
      e.preventDefault();
      //setCidade=("");
    

    let currentValue = document.querySelector('[name=detectSearch]')
    .value;
    /*
    Fazendo minha requisição em realtime
    alert(currentValue)
    */
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=6e9ea4eae221a29d6b41d265bda03681&units=metric`;

        fetch(url)

        .then(response=> response.json())

        .then(data=>{

            const {main, name, sys, weather, clouds} = data;

            if(sys != undefined){

                console.log(sys);

            if(weather != undefined){
                  const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
                  setCidade(`
                  <div class="result">

                    <div class="value">

                      <p> <b>Pais:</b> ${sys.country}</p>
                      <p> <b>Temperatura:</b> ${main.temp} </p>
                      <P> <b>Máxima:</b> ${main.temp_max}</p>
                      <P> <b>Minima:</b> ${main.temp_min}</p>
                      <p> <b>Cidade:</b> ${name}</p>
                      <p> <b>Humidade:</b> ${main.humidity}%</p>
                      <p> <b>Nebulosidade:</b> ${clouds.all}%</p>
                      <p> <b>Narcer do sol:</b> ${sys.sunrise}</p>
                      <p> <b>Narcer do sol:</b> ${sys.sunset}</p>
                      <p> <b>Descrição:</b> ${weather[0]['description']}</p>
                    </div><!--value-->
                    
                    <div class="icone"> <img src="${icon}"/> </div>

                  </idv>

                  
                  `
                )
                //console.log(weather[0]['description']);
                }
          }else{
            setCidade=("");
          }
        })

    

      }

  return (

    <div className="wraper">

    <div className="Search">
        <img src='./clima.png' />

        <form onSubmit={(e)=>detectSearch(e)}>

          <input placeholder={props.placeholder} type="text"  name='detectSearch'></input>
          <input type="submit" value="Buscar!" ></input>

        </form>
    </div>

    {
        
        (cidade != "")?
        <div dangerouslySetInnerHTML={{__html: cidade}}></div>:
        <div className="choice" >Pesquise sua Cidade acima...</div>
        

    }

      <footer className='footer'>© 2024 Everton Frankllin | Powered by - <a href='https://evertonfrankllin.com/'>Everton Frankllin</a></footer>

    </div> //wraper 

    
  )

};

export default Search;