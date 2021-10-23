import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = (props) => {
    return(
        <div className="Cartelera-Pelis">
        <h1>Movie Billboard</h1>
        <div className="Contenedor-Pelis"> 
          {
            props.cartelera.map((a,index)=>(
              <>
                <div className="Peli-Individual">
                  <div className = "poster">
                    <img src={a.img}></img>
                  </div>
                  <div className = "info">
                    <p>{a.nombre}</p>
                    <p>{a.idioma}</p>
                    <p>{a.clasificacion}</p>
                    <p>{a.duracion}</p>
                    <div className="btnPelis">
                    {
                      a.horarios.map((b,index)=>
                        <button class="btn btn-light" onClick={()=>props.agregar(a,b)}> {b} </button>
                      )
                    }
                    </div>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>



    );
}

export default Movies;