import './Card.css'

export const Card = ({title , description}) =>{
    return(
        <div className="Card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}