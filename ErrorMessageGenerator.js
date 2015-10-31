import _ from 'lodash';

//
// Class for generating error messages for a particular HTTP status.
//
// The title and content can be overridden for a particular action type with
// the registerTitle and registerContent methods respectively.
//
export default class ErrorMessageGenerator {
  constructor(defaultTitle, defaultContent) {
    this.defaultTitle = defaultTitle;
    this.defaultContent = defaultContent;
    this.titles = {};
    this.contents = {};
  }

  registerTitle(actionType, title) {
    this.titles[actionType] = title;
  }

  registerContent(actionType, content) {
    this.contents[actionType] = content;
  }

  generateMessage(error) {
    let title = this.titles[error.actionType]   || this.defaultTitle;
    if (_.isFunction(title)) {
      title = title(error);
    }
    let content = this.contents[error.actionType] || this.defaultContent;
    if (_.isFunction(content)) {
      content = content(error);
    }
    return {
      title: title,
      content: content
    }
  }
}
