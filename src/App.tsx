import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import OptionList from './components/OptionList/index'
import InputForm from './components/InputForm/index';

type Options = Option[]
export type Option = {
  id: number,
  text: string
}

const App: React.FC = () => {
  const [options, setOptions] = useState<Options>([]);
  const [showDelete, setShowDelete] = useState<boolean>(true);

  const resetChooser = () => {
    setOptions([]);
    setShowDelete(true);
  }

  const addOption = (option: Option) => {
    setOptions([option, ...options]);
    const input = document.getElementsByTagName('form')[0] as HTMLFormElement;
    input.reset();
  }

  const deleteOption = (option: Option) => {
    const filteredOptions = options.filter((existingOption) => {
      return existingOption.id !== option.id;
    })

    setOptions(filteredOptions);    
  }

  const startRandomChoice = () => {    
    setShowDelete(false);
  }

  useEffect(
    () => {
      if (!showDelete && options.length > 1) { 
        let randomToRemove = options[Math.floor(Math.random() * options.length)];
        setTimeout(() => { deleteOption(randomToRemove); }, 1000);
      }
    },
    [showDelete, options]
  );

  return (
    <div className="App">
      <div className={styles.inputContainer}>
        <InputForm addOption={addOption} showDelete={showDelete} startRandomChoice={startRandomChoice} optionCount={options.length} resetChooser={resetChooser}/>
      </div>
      <OptionList options={options} showDelete={showDelete} deleteOption={deleteOption}/>
    </div>
  );
}

export default App;
