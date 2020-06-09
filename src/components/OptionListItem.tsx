import React from 'react';

type OptionListItemProps = {
    text: string,
    deleteItem: (text: string) => {}
}

const OptionListItem: React.FC<OptionListItemProps> = ({text, deleteItem}) => {
    return (
        <>
            <li>{text}</li>
            <button onClick={deleteItem.bind(null, text)}>Delete</button>
        </>
    );
}

export default OptionListItem;