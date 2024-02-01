import classes from './ContentRow.module.scss'
import Button from '../Button'
interface ContentRowProps {
    title : string,
    desc : string,
    srcsetExp : string,
    srcset : string,
    img : string,
    reverse?: boolean,
    btn : Button
}
const ContentRow : React.FC<ContentRowProps> = ({title, desc, srcsetExp, srcset, img, reverse, btn} : ContentRowProps) => {
   return (
    <section className={classes.contentRow}>
        <div className={classes.contentRow__container}>
            <div className={classes.contentRow__content}>
                <h3 className={classes.contentRow__title + ' ' + 'title'}>{title}</h3>
                <p className={classes.contentRow__desc + ' ' + 'desc'}>{desc}</p>
                {btn}
            </div>
            <div className={classes.contentRow__image + ' ' + (reverse ? 'grid--reverse' : '')}>
                <picture>
                    <source srcSet={srcsetExp} media='(min-width: 1920px)'/>
                    <source srcSet={srcset}/>
                    <img src={img} alt="cover" />
                </picture>
            </div>
        </div>
    </section>
   ) 
}

export default ContentRow