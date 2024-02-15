import './card.styles.css'

// Here, the monster is destructed from props, which is futher destructed into name, email and id
const Card = ({monster: { name, email, id }}) => (
  <div className="card-container" key={id}>
    <img 
      alt={`monster ${name}`} 
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;