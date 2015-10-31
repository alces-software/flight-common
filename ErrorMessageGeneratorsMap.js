import _ from 'lodash';

//
// A map from HTTP status codes to error message generators and an API for
// modifying that map.
//
export default class ErrorMessageGeneratorsMap {
  constructor() {
    this.errorMessageGenerators = {};
    this.unexpectedGenerator = undefined;
  }

  addGeneratorForStatus(status, generator) {
    this.errorMessageGenerators[status] = generator;
    return this;
  }

  addUnexpectedGenerator(generator) {
    this.unexpectedGenerator = generator;
    return this;
  }

  getGeneratorForStatus(status) {
    return this.errorMessageGenerators[status] || this.unexpectedGenerator;
  }

  customizeErrorMessage(status, actionType, customizations) {
    const generator = this.getGeneratorForCustomization(status);

    _.forOwn(customizations, (customizationValue, customizationType) => {
      if (customizationType === "title") {
        generator.registerTitle(actionType, customizationValue);
      } else if (customizationType === "content") {
        generator.registerContent(actionType, customizationValue);
      } else {
        throw `Unsupported customization type ${customizationType}`;
      }
    })

    return this;
  }

  getGeneratorForCustomization(status) {
    let generator;
    if (status === "unexpected") {
      generator = this.unexpectedGenerator;
    } else {
      generator = this.errorMessageGenerators[status];
    }
    if (generator === undefined) {
      throw `No error message generator registered for status ${status}`;
    } else {
      return generator;
    }
  }
}
