import React, {useRef} from 'react';

type InputFormProps = {
    addItem: (text: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({addItem}) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        addItem(enteredText);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="input-text">Enter Option</label>
            <input type="text" id='input-text' ref={textInputRef}/>
        </div>
        <button type="submit">Submit</button>
    </form>
    )
}

export default InputForm