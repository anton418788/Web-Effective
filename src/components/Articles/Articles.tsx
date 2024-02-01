import Article from './Article';
import classes from './Articles.module.scss'

import img1 from './../../assets/articles/01.png'
import img2 from './../../assets/articles/02.png'
import img3 from './../../assets/articles/03.png'
import Button from '../Button';


import { useState } from 'react';
const Articles: React.FC = () => {
    const [statement, setStatement] = useState(false)
    const [btnText, setBtnText] = useState('View All')

    const article1 = <Article 
                        img={img1} 
                        title='Disease detection, check up in the laboratory'
                        desc='In this case, the role of the health laboratory is very important to do a disease detection...' 
                        link='#'
                    />
                    
    const article2 =  <Article 
                    img={img2} 
                    title='Herbal medicines that are safe for consumption'
                    desc='Herbal medicine is very widely used at this time because of its very good for your health...' 
                    link='#'
                />
    const article3 = <Article 
                    img={img3} 
                    title='Natural care for healthy facial skin'
                    desc='A healthy lifestyle should start from now and also for your skin health. There are some...' 
                    link='#'
                />
    
    function viewAll(){
        let state; 
        setStatement((oldState) => {
            state = !oldState
            return state
        })
        statement
            ? setBtnText('View All')
            : setBtnText('Hide')

    }
    const viewArticles = [article1, article2, article3, article2, article3, article1, article3, article2, article1]

    return (
        <section className={classes.Articles}>
            <h2 className={'title centered ' + classes.Articles__title}>Check out our latest article</h2>
            <div className={classes.Articles__container}>
                {statement 
                    ? viewArticles
                    : viewArticles.slice(0, 3)
                }
            </div>
            <Button text={btnText} state=' btn--stroke btn--centered' className={classes.Articles__btn} action={viewAll}/>
        </section>
    )
}

export default Articles;