import React from 'react';
import { Option } from '../../App';
import styles from './styles.module.scss';

type OptionListItemProps = {
    option: Option,
    showDelete: boolean,
    deleteOption: (option: Option) => void
}

const OptionListItem: React.FC<OptionListItemProps> = ({option, showDelete, deleteOption}) => {
    const disabled = option.disabled === true;

    return (
        <div className={disabled ? styles.disabledListItem : styles.listItem}>
            <li>{option.text}</li>
            {showDelete && <a className={styles.deleteItem} onClick={deleteOption.bind(null, option)} href="#0">x</a>}
        </div>
    );
}

export default OptionListItem;