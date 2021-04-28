export const defaultState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
    bufferValue: null
  };
  
  export const handleNumber = (value, state) => {
    if (state.currentValue == "0") {
      return { currentValue: `${value}` };
    }

    if(state.operator !== null && state.bufferValue == null) {
        return {currentValue: `${value}`, 
                bufferValue: `${value}`
        }
    }

    return {
      currentValue: `${state.currentValue}${value}`
    };
  };
  
  export const handleEqual = state => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
      operator: null,
      previousValue: null
    };
  
    if (operator === "/") {
      return {
        currentValue: previous / current,
        ...resetState
      };
    }
  
    if (operator === "*") {
      return {
        currentValue: previous * current,
        ...resetState
      };
    }
  
    if (operator === "+") {
      return {
        currentValue: previous + current,
        ...resetState
      };
    }
  
    if (operator === "-") {
      return {
        currentValue: previous - current,
        ...resetState
      };
    }
  
    return state;
  };
  
  const CalcLogic = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
        };
      case "equal":
        return handleEqual(state);
      case "clear":
        return defaultState;
      case "plusmin":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`
        };
      default:
        return state;
    }
  };
  
  export default CalcLogic;
  