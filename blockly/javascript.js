Blockly.JavaScript['web_fetch'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type_');
  let value_data_ = Blockly.JavaScript.valueToCode(block, 'data_', Blockly.JavaScript.ORDER_ATOMIC);
  let statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  let code = 'fetch(' + value_data_ + ')\n' +
    '.then(response => {\n' +
    '  return response' + dropdown_type_ + ';\n' +
    '}).then(myFetchData => {\n' +
    statements_do_ + '\n' +
    '});';
  return code;
};

Blockly.JavaScript['web_fetch_val'] = function (block) {
  let code = 'myFetchData';
  return [code, Blockly.JavaScript.ORDER_NONE];
};