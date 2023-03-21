import { useContext} from 'react';
import contextApp from '../../../context';
import './Cards.css'

function Cards(props){

    const {dispatcherevent}=useContext(contextApp);

    function addCart(){
        props.item.disable=true;
        dispatcherevent("Additem",props.item);
        console.log(props.item);
    }

    let stars=[]
    for(let i=1;i<props.item.rating;i++) stars[i]=1
    const h=props.item.rating%(stars.length-1)>0.5?true:false;
    return(
        <div >
            <div className="card text-center h-100 w-100">
            <img className="card-img-top p-2" src={props.item.thumbnail} alt="Card img cap" />
            <div className="card-body ">
            <h5 className="card-title text-uppercase">{props.item.title}</h5>
            <h6 className="card-title text-uppercase">{props.item.category}</h6>
            <p className="card-text">Price: &#x20b9; {props.item.price}</p>
            <p className="card-text">Rating:  {stars.map(x=><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>)}{h && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>}&nbsp; ({props.item.stock})</p>
            <p className="card-text text-uppercase">Category: {props.item.category}</p>
                </div>
                <div className='card-footer '><button onClick={addCart} className="btn btn-primary" disabled={props.item.disable}>Cart</button></div> 
            </div>

        </div>
    
        )

    
}
export default Cards;