import Card from '../card/card.component';
import './card-list.styles.css'

// Actaully the argument is props, but we are destructing it in the defination itself, and since there is nothing at the top we can do an implicit return
const CardList = ({monsters}) => (
    <div className='card-list'>
        {
            monsters.map((monster) => {
                return(
                    <Card monster={monster}/>
                )
            })
        }
    </div>
);

export default CardList;
