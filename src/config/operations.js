var operations = {
  "equal": (operand1, operand2) => {
    return operand1 === operand2;
  }
}

export default function(list, operator) {
  return list.reduce(operations[operator]);
}
