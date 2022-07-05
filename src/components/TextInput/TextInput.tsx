import { FC, useState } from 'react';

interface TextInputProps {
    initValue?: string;
}

const TextInput: FC<TextInputProps> = ({ initValue = '' }) => {
    const [value, setValue] = useState(initValue)

    const valueOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <>
            <input type="text" value={value} onChange={valueOnChange} />
            {value}
        </>
    )
};

export default TextInput;
