import ServiceCard from '../ServiceCard';
import classes from './Service.module.scss'

import card1 from './../../assets/service/01.svg'
import card2 from './../../assets/service/02.svg'
import card3 from './../../assets/service/03.svg'
import card4 from './../../assets/service/04.svg'
import card5 from './../../assets/service/05.svg'
import card6 from './../../assets/service/06.svg'
import Button from '../Button';

const Service : React.FC = () => {
    return (
        <section className={classes.service}>
            <div className={classes.service__header}>
                <h2 className="title centered">Our services</h2>
                <p className='desc centered'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div className={classes.service__container}>
                <ServiceCard title='Search doctor' imgPath={card1} desc='Choose your doctor from thousands of specialist, general, and trusted hospitals'/>
                <ServiceCard title='Online pharmacy' imgPath={card2} desc='Buy  your medicines with our mobile application with a simple delivery system'/>
                <ServiceCard title='Consultation' imgPath={card3} desc='Free consultation with our trusted doctors and get the best recomendations'/>
                <ServiceCard title='Details info' imgPath={card4} desc='Free consultation with our trusted doctors and get the best recomendations'/>
                <ServiceCard title='Emergency care' imgPath={card5} desc='You can get 24/7 urgent care for yourself or your children and your lovely family'/>
                <ServiceCard title='Tracking' imgPath={card6} desc='Track and save your medical history and health data '/>
            </div>
            <Button text='Learn more' state='btn--stroke' className={classes.service__btn}/>
        </section>
    )
}

export default Service;