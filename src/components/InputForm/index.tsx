import React, {useRef} from 'react';
import {Option} from '../../App';
import styles from './styles.module.scss';

type InputFormProps = {
    addOption: (option: Option) => void;
    startRandomChoice: () => void;
    optionCount: number;
    showDelete: boolean;
    resetChooser: () => void;
}

const InputForm: React.FC<InputFormProps> = ({addOption, startRandomChoice, optionCount, showDelete, resetChooser}) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        const option: Option = {
            id: Math.random(),
            text: enteredText.toUpperCase(),
            disabled: false
        };
        addOption(option);
    }

    let button;

    if (!showDelete) {
        button = <button className={`${styles.startButton}`} onClick={resetChooser}>Reset</button>
    } else if (showDelete) {
        button = <button className={`${styles.startButton} ${optionCount < 2 ? styles.hide : ''}`} onClick={startRandomChoice}>Choose</button>
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input type="text" className={styles.inputText} ref={textInputRef} placeholder="Enter option" required/>
            </div>
            {showDelete && <button type="submit"><span>&#43;</span></button>}
        </form>
        {button}
    </>
    )
}

export default InputForm