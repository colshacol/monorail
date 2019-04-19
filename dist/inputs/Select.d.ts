import React, { SFC } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare type SelectOption = {
    label: string;
    value: string;
};
declare type Props = {
    label?: string;
    options: Array<SelectOption>;
    onSelect?: (e: string | Array<string> | number | undefined) => void;
    onBlur?: (e: React.SyntheticEvent) => void;
    value?: string | Array<string> | number;
    placeholder?: string;
    required?: boolean;
    cssOverrides?: SimpleInterpolation;
    name?: string;
    onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void);
};
export declare const Select: SFC<Props>;
export {};
