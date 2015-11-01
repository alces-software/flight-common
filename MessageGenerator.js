import _ from 'lodash';

//
// Class for generating messages for a particular code.
//
// The title and content can be overridden with an override code, see the the
// registerTitle and registerContent methods respectively.  This is
// particularly useful for overriding based on the actionType submitted to the
// redux store.
//
export default class MessageGenerator {
  constructor(defaultTitle, defaultContent) {
    this.defaultTitle = defaultTitle;
    this.defaultContent = defaultContent;
    this.titles = {};
    this.contents = {};
  }

  registerTitle(overrideCode, title) {
    this.titles[overrideCode] = title;
  }

  registerContent(overrideCode, content) {
    this.contents[overrideCode] = content;
  }

  generateMessage(message, overrideCode) {
    let title = this.titles[overrideCode] || this.defaultTitle;
    if (_.isFunction(title)) {
      title = title(message);
    }
    let content = this.contents[overrideCode] || this.defaultContent;
    if (_.isFunction(content)) {
      content = content(message);
    }
    return {
      title: title,
      content: content
    }
  }
}
