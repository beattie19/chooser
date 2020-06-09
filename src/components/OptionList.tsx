import React from 'react';
import OptionListItem from './OptionListItem';

type OptionListProps = {
    items: string[];
    deleteItem: (text: string) => void;
}

const OptionList: React.FC<OptionListProps> = ({items, deleteItem}) => {
    return (
        <ul>
            {items.map((item) => {                
                return <OptionListItem key={Math.random()} text={item} deleteItem={deleteItem}/>
            })}
        </ul>
    )
}

export default OptionList;