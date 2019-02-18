Blockly.JavaScript['web_fetch'] = function (block) {
  var value_url_ = Blockly.JavaScript.valueToCode(block, 'url_', Blockly.JavaScript.ORDER_ATOMIC);
  let code;
  code = 'await webFetch(' + value_url_ + ');\n';
  return code;
};

Blockly.JavaScript['web_fetch_val'] = function (block) {
  let code = 'myFetchData';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['web_fetch_val_to_json'] = function (block) {
  var value_json_ = Blockly.JavaScript.valueToCode(block, 'json_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'JSON.parse(' + value_json_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['web_fetch_get_json_values'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key_ = Blockly.JavaScript.valueToCode(block, 'key_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_name_ + '[' + value_key_ + ']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['web_fetch_get_json_keys'] = function (block) {
  var value_name_ = Blockly.JavaScript.valueToCode(block, 'name_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'Object.keys(' + value_name_ + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['web_fetch_get_image'] = function(block) {
  var dropdown_type_ = block.getFieldValue('type_');
  var code = 'await getImage(myFetchDataUrl, myFetchData, \''+dropdown_type_+'\')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};