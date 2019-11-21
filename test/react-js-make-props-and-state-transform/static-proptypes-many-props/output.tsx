import * as React from 'react';
type MyComponentProps = {
    any?: any;
    array?: any[];
    bool?: boolean;
    func?: (...args: any[]) => any;
    number?: number;
    object?: object;
    string?: string;
    node?: React.ReactNode;
    element?: JSX.Element;
    oneOf?: 'a' | 'b' | 'c';
    oneOfType?: string | number;
    arrayOf?: string[];
    objectOf?: {
        [key: string]: string;
    };
    shape?: {
        color?: string;
        fontSize?: number;
    };
    anyRequired: any;
    arrayRequired: any[];
    boolRequired: boolean;
    funcRequired: (...args: any[]) => any;
    numberRequired: number;
    objectRequired: object;
    stringRequired: string;
    nodeRequired: React.ReactNode;
    elementRequired: JSX.Element;
    oneOfRequired: 'a' | 'b' | 'c';
    oneOfTypeRequired: string | number;
    arrayOfRequired: string[];
    objectOfRequired: {
        [key: string]: string;
    };
    shapeRequired: {
        color?: string;
        fontSize: number;
    };
};
export default class MyComponent extends React.Component<MyComponentProps, {}> {
    static propTypes = {
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
        oneOfType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
        oneOfTypeRequired: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        arrayOfRequired: PropTypes.arrayOf(PropTypes.string).isRequired,
        objectOfRequired: PropTypes.objectOf(PropTypes.string).isRequired,
        shapeRequired: PropTypes.shape({
            color: PropTypes.string,
            fontSize: PropTypes.number.isRequired,
        }).isRequired,
    };
    render() {
        return <div />;
    }
}
