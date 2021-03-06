import { Token } from '@ubeswap/sdk';
import { CSSProperties } from 'react';
export default function ImportRow({ token, style, dim, showImportView, setImportToken, }: {
    token: Token;
    style?: CSSProperties;
    dim?: boolean;
    showImportView: () => void;
    setImportToken: (token: Token) => void;
}): JSX.Element;
