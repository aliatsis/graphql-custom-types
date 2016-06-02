import {
  GraphQLScalarType
} from 'graphql';

export class GraphQLCustomScalarType extends GraphQLScalarType {
  constructor(name, description, parser) {
    super({
      name: name,
      description: description,
      serialize: value => {
        return value;
      },
      parseValue: value => {
        return value;
      },
      parseLiteral: ast => {
        return parser(ast);
      }
    });
  }
}

export class GraphQLTruthyScalarType extends GraphQLScalarType {
  constructor(baseType) {
    let name = `Truthy${baseType.name}`;

    super({
      name: name,
      description: `The '${name}' scalar type is a '${baseType.name}' scalar type with a 'truthy' value according to JavaScript standards`,
      serialize: (value) => baseType.serialize(value),
      parseValue: (value) => baseType.parseValue(value),
      parseLiteral: (ast) => baseType.parseLiteral(ast) || null
    });
  }
}