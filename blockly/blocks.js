Blockly.Blocks['web_fetch'] = {
  init: function () {
    this.appendValueInput("url_")
      .setCheck(null)
      .appendField("取得網頁內容");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("http://oxxo.studio");
    this.setCommentText("取得網頁內容後，才會繼續執行下方程式");
  }
};

Blockly.Blocks['web_fetch_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("取得的內容");
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("http://oxxo.studio");
  }
};

Blockly.Blocks['web_fetch_val_to_json'] = {
  init: function () {
    this.appendValueInput("json_")
      .setCheck(null)
      .appendField("轉換為 JSON");
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("http://oxxo.studio");
    this.setCommentText("取得的內容需為 JSON 格式");
  }
};

Blockly.Blocks['web_fetch_get_json_keys'] = {
  init: function () {
    this.appendValueInput("name_")
      .setCheck(null)
      .appendField("JSON");
    this.appendDummyInput()
      .appendField("裡的 Key");
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("http://oxxo.studio");
  }
};

Blockly.Blocks['web_fetch_get_json_values'] = {
  init: function () {
    this.appendValueInput("name_")
      .setCheck(null)
      .appendField("JSON");
    this.appendValueInput("key_")
      .setCheck(null)
      .appendField("裡 Key 為");
    this.appendDummyInput()
      .appendField("的值");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("http://oxxo.studio");
  }
};

Blockly.Blocks['web_fetch_get_image'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("取得內容裡的")
      .appendField(new Blockly.FieldDropdown([["JPG", ".jpg"], ["PNG", ".png"], ["GIF", ".gif"], ["JPEG", ".jpeg"]]), "type_")
      .appendField("圖片");
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};