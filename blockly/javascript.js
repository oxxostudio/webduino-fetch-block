Blockly.JavaScript['web_fetch'] = function (block) {
  var dropdown_type_ = block.getFieldValue('type_');
  let value_data_ = Blockly.JavaScript.valueToCode(block, 'data_', Blockly.JavaScript.ORDER_ATOMIC);
  let statements_do_ = Blockly.JavaScript.statementToCode(block, 'do_');
  let code = 'web_fetch(' + dropdown_type_ + ', ' + value_data_ + ', function(myFetchData){\n'+
  statements_do_+'\n'+
  '});\n';
  return code;
};

Blockly.JavaScript['web_fetch_val'] = function (block) {
  let code = 'myFetchData';
  return [code, Blockly.JavaScript.ORDER_NONE];
};