import * as React from 'react';
function MyComponent() {
  return <div />
}

MyComponent.propTypes = {
    children: PropTypes.node,
    any: PropTypes.any,
    array: PropTypes.array,
    bool: PropTypes.bool,
    func: PropTypes.func,
    number: PropTypes.number,
    object: PropTypes.object,
    string: PropTypes.string,
    node: PropTypes.node,
    element: PropTypes.element,
    oneOf: PropTypes.oneOf(['a', 'b', 'c']),
    oneOfType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    arrayOf: PropTypes.arrayOf(PropTypes.string),
    objectOf: PropTypes.objectOf(PropTypes.string),
    shape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number,
    }),
    anyRequired: PropTypes.any.isRequired,
    arrayRequired: PropTypes.array.isRequired,
    boolRequired: PropTypes.bool.isRequired,
    funcRequired: PropTypes.func.isRequired,
    numberRequired: PropTypes.number.isRequired,
    objectRequired: PropTypes.object.isRequired,
    stringRequired: PropTypes.string.isRequired,
    nodeRequired: PropTypes.node.isRequired,
    elementRequired: PropTypes.element.isRequired,
    oneOfRequired: PropTypes.oneOf(['a', 'b', 'c']).isRequired,
    oneOfTypeRequired: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    arrayOfRequired: PropTypes.arrayOf(PropTypes.string).isRequired,
    objectOfRequired: PropTypes.objectOf(PropTypes.string).isRequired,
    shapeRequired: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number.isRequired,
    }).isRequired,
};
