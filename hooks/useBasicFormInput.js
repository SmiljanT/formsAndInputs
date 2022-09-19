import { useReducer } from 'react';

    const initialInputState = {
        value:'',
        isTouched: false,
    };

    const inputUseReducer = (state, action) => {
        if (action.type === 'INPUT') {
            return {value: action.value, isTouched: state.isTouched};
        }
        if (action.type === 'BLUR') {
            return {isTouched: true, value: state.value};
        }
        if (action.type === 'RESET') {
            return initialInputState;
        }
        return initialInputState;
    };

    const useBasicFormInput = (validateValue) => {
     
    const [inputState, dispatch] = useReducer(inputUseReducer, initialInputState);


    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const enteredValueHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
        };
    
    const blurHandler = (event) => {
        dispatch({type: 'BLUR'});
    };

    const reset = () => {
        dispatch({type: 'RESET'});
    };
  return  {
    value: inputState.value,
    hasError,
    valueIsValid,
    enteredValueHandler,
    blurHandler,
    reset
   };
};


export default useBasicFormInput;