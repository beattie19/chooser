import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import OptionList from './components/OptionList/index'
import InputForm from './components/InputForm/index';

type Options = Option[]
export type Option = {
  id: number,
  text: string
  disabled: boolean
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

  const disableOption = (option: Option) => {
    const updatedOptions = options.map((existingOption) => {
        console.log(option);
      if (existingOption.id === option.id) {
        existingOption.disabled = true;
      };
      return existingOption;
    });

    setOptions(updatedOptions);
  }

  const startRandomChoice = () => {    
    setShowDelete(false);
  }

  const disabledOptions = options.filter((option) => {
    return option.disabled === false;
  });

  // console.log(disabledOptions);

  useEffect(
    () => {
      if (!showDelete && disabledOptions.length > 1) { 
        let randomRemoveEnabledOption = disabledOptions[Math.floor(Math.random() * disabledOptions.length)];
        setTimeout(() => { disableOption(randomRemoveEnabledOption); }, 1000);
      }
    },
    [showDelete, options]
  );

  return (
    <div className="App">
      <div className={styles.headerNav}>
        <h1>Chooser</h1>
      </div>
      <div className={styles.inputContainer}>
        <InputForm addOption={addOption} showDelete={showDelete} startRandomChoice={startRandomChoice} optionCount={options.length} resetChooser={resetChooser}/>
      </div>
      <OptionList options={options} showDelete={showDelete} deleteOption={deleteOption}/>
    </div>
  );
}

export default App;
