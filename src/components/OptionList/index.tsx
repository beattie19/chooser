import React from 'react';
import OptionListItem from '../OptionListItem';
import { Option } from '../../App';
import styles from './styles.module.scss';

type OptionListProps = {
    options: Option[];
    showDelete: boolean;
    deleteOption: (option: Option) => void;
}

const OptionList: React.FC<OptionListProps> = ({options, showDelete, deleteOption}) => {
    return (
        <ul className={styles.optionList}>
            {options.map((option) => {             
                return <OptionListItem key={option.id} option={option} showDelete={showDelete} deleteOption={deleteOption}/>
            })}
        </ul>
    )
}

export default OptionList;