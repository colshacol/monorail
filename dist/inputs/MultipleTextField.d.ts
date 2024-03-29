import { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { TextFieldProps } from './TextField';
export declare const BBTextFieldLabel: import("styled-components").StyledComponent<"p", any, {}, never>;
declare type MultipleTextFieldProps = TextFieldProps & {
    key: string;
};
declare type Props = {
    label?: string;
    onChange: (key: string, value: string | number) => void;
    cssOverrides?: SimpleInterpolation;
    textFields: Array<MultipleTextFieldProps>;
    children?: ReactNode;
};
export declare class MultipleTextField extends Component<Props> {
    render(): JSX.Element;
}
export {};
