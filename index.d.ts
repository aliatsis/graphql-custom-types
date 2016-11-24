import { GraphQLScalarType, GraphQLNonNull } from "graphql";
import { ValueNode } from "graphql/language/ast";

export class Factory {
  getRegexScalar(options: RegexScaleOptions): GraphQLCustomScalarType;
  getCustomScalar(name: string, description: string, parser: (ast: ValueNode) => any): GraphQLCustomScalarType;
}

export class GraphQLCustomScalarType extends GraphQLScalarType {
  constructor(name: string, description: string, parser: (ast: ValueNode) => any);
}

export class GraphQLTruthyScalarType extends GraphQLScalarType {
  constructor(baseType: GraphQLScalarType);
}

export class GraphQLStringPattern extends GraphQLCustomScalarType {
  constructor(pattern: string | RegExp, customName?: string);
}

export class GraphQLLimitedString extends GraphQLCustomScalarType {
  constructor(min?: number, max?: number, alphabet?: string, customName?: string);
}

export class GraphQLPassword extends GraphQLCustomScalarType {
  constructor(min?: number, max?: number, alphabet?: string, complexity?: PasswordComplexityOptions);
}

export var GraphQLTruthyString: GraphQLNonNull<GraphQLScalarType>;
export var GraphQLTruthyFloat: GraphQLNonNull<GraphQLScalarType>;
export var GraphQLTruthyInt: GraphQLNonNull<GraphQLScalarType>;
export var GraphQLTruthyID: GraphQLNonNull<GraphQLScalarType>;

export var GraphQLEmail: GraphQLCustomScalarType;
export var GraphQLURL: GraphQLCustomScalarType;
export var GraphQLDateTime: GraphQLCustomScalarType;
export var GraphQLDate: GraphQLCustomScalarType;
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