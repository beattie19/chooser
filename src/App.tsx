import React, { useState } from 'react';
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

  const addOption = (option: Option) => {
    setOptions([option, ...options]);
  }

  const deleteOption = (option: Option) => {
    const filteredOptions = options.filter((existingOption) => {
      return existingOption.id !== option.id;
    })

    setOptions(filteredOptions);    
  }

  const startRandomChoice = () => {    
    setShowDelete(false);
    pickSingleChoice();
  }

  const pickSingleChoice = () => {

      // const randomToRemove = options[Math.floor(Math.random() * options.length)];

      // deleteOption(randomToRemove);

    while(options.length > 1) {
    //   // const randomToRemove = options[Math.floor(Math.random() * options.length)];
    //   // console.log(randomToRemove);
    //   // deleteOption(options[0]);
    //   // console.log(options);
      options.pop();
    }
  }

  return (
    <div className="App">
      <div className={styles.inputContainer}>
        <InputForm addOption={addOption} startRandomChoice={startRandomChoice}/>
      </div>
      <OptionList options={options} showDelete={showDelete} deleteOption={deleteOption}/>
    </div>
  );
}

export default App;
