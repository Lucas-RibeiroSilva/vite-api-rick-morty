import s from './card.module.css'

export const Card = ({image, name, species, gender, status}) => {
    return(
        <div className={s.card}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{status}</p>
            <p>{gender}</p>
            <p>{species}</p>
        </div>
    )
}