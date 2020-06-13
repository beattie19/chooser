import React, {useRef} from 'react';
import {Option} from '../../App';
import styles from './styles.module.scss';

type InputFormProps = {
    addOption: (option: Option) => void;
    startRandomChoice: () => void;
}

const InputForm: React.FC<InputFormProps> = ({addOption, startRandomChoice}) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        const option: Option = {
            id: Math.random(),
            text: enteredText
        };
        addOption(option);
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input type="text" className={styles.inputText} ref={textInputRef} placeholder="Enter option" required/>
            </div>
            <button type="submit"><span>&#43;</span></button>
        </form>
        <button onClick={startRandomChoice}>Start</button>
    </>
    )
}

export default InputForm