import classes from './Slide.module.scss'

interface SlideProps {
    img : string,
    name : string,
    prof : string,
    comment  : string,
}
const Slide : React.FC<SlideProps> = ({img, name, prof, comment} : SlideProps) => {
    return (
                <div className={classes.Slide}>
                    <h3 className="title centered title--white">What our customer are saying</h3>
                    <div className={classes.Slide__row}>
                        <div className={classes.Slide__left}>
                            <div className={classes.Slide__image}>
                                <img src={img} alt="author" />
                            </div>
                            <div className={classes.Slide__col}>
                                <span className={classes.Slide__author}>{name}</span>
                                <span className={classes.Slide__prof}>{prof}</span>
                            </div>
                        </div>
                        <p className={classes.Slide__comment}>{comment}</p>
                    </div>
                </div>
    )
}

export default Slide