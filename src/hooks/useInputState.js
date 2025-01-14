import { useState } from "react"
// Create Custom Hook 
const useInputState = (defaultValue=null) =>{
    const [value , setValue] = useState(defaultValue)
    const onChange = e => {
        setValue(e.target.value)
    }
    // const handleChange = e => {
    //     setValue(e.target.value)
    // }
    // return[value , onChange]
    return {
        value , onChange
    }
}
export default useInputState; 