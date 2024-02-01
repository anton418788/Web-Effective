import classes from './Button.module.scss'

interface IButtonProps {
    state : string,
    text : string,
    className?: string,
    action?: () => (event : Event) => void;
}
const Button : React.FC<IButtonProps> = ({state = '', text, className = '', action} : IButtonProps) => {
    return (
        <>
            <button className={'btn-reset' + ' ' + state + ' ' + classes.btn + ' ' + className} onClick={action}>
                <span className="btn__text">{text}</span>
            </button>
        </>
    )
}

export default Button;