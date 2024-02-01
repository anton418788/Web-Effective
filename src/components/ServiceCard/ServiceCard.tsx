import classes from './ServiceCard.module.scss'

interface CardProps {
    imgPath : string,
    title : string,
    desc : string
}
const ServiceCard : React.FC<CardProps> = ({imgPath, title, desc} : CardProps) => {
    return (
        <article className={classes.serviceCard}>
            <img src={imgPath} alt="card" className={classes.serviceCard__img}/>
            <h4 className={classes.serviceCard__title + ' title'}>{title}</h4>
            <p className={classes.serviceCard__desc  + ' desc'}>{desc}</p>
        </article>
    )
}

export default ServiceCard;