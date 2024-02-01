import classes from './Article.module.scss'

interface ArticleProps {
    img : string,
    title : string,
    desc : string,
    link : string
}

const Article : React.FC<ArticleProps> = ({img, title, desc, link} : ArticleProps) => {
    return (
        <article className={classes.Article}>
            <div className={classes.Article__image}>
                <img src={img} alt="" />
            </div>
            <div className={classes.Article__content}>
                <h4 className={classes.Article__title}>{title}</h4>
                <p className={classes.Article__desc}>{desc}</p>
                <a href={link} className={classes.Article__link}>Read more</a>
            </div>
        </article>
    )
}

export default Article