import { GraphQLScalarType, Value } from "graphql";

export class Factory {
  getRegexScalar(options: RegexScaleOptions): GraphQLCustomScalarType;
  getCustomScalar(name: string, description: string, parser: (ast: Value) => any): GraphQLCustomScalarType;
}

export class GraphQLCustomScalarType extends GraphQLScalarType {
  constructor(name: string, description: string, parser: (ast: Value) => any);
}

export class GraphQLLimitedString extends GraphQLCustomScalarType {
  constructor(min?: number, max?: number, alphabet?: string);
}

export class GraphQLPassword extends GraphQLCustomScalarType {
  constructor(min?: number, max?: number, alphabet?: string, complexity?: PasswordComplexityOptions);
}

export class GraphQLDefinedString extends GraphQLCustomScalarType {
  constructor(definedValues: string[], customName?: string, customDescription?: string)
}

export var GraphQLEmail: GraphQLCustomScalarType;
export var GraphQLURL: GraphQLCustomScalarType;
export var GraphQLDateTime: GraphQLCustomScalarType;
export var GraphQLUUID: GraphQLCustomScalarType;

interface RegexScaleOptions {
  name: string;
  regex: RegExp;
  description?: string;
  error?: string | Error;
}

interface PasswordComplexityOptions {
  alphaNumeric?: boolean;
  mixedCase?: boolean;
  specialChars?: boolean;
}