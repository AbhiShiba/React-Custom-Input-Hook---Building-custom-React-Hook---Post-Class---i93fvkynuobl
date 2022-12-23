import { useState } from "react";

//complete the input hook
const useInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);

    // const reset = () => {
    //     setValue(initialValue);
    // }

    const IpAttribute = {
        value,
        onChange : (e) => {
            setValue(e.target.value);
        }
    }

    return IpAttribute;
};

export default useInput;
