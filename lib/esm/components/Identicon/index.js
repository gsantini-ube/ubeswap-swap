import { jsx as _jsx } from "react/jsx-runtime";
import { useContractKit } from '@celo-tools/use-contractkit';
import Jazzicon from 'jazzicon';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
const StyledIdenticonContainer = styled.div `
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
`;
export default function Identicon() {
    const ref = useRef();
    const { address: account } = useContractKit();
    useEffect(() => {
        if (account && ref.current) {
            ref.current.innerHTML = '';
            ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
        }
    }, [account]);
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    return _jsx(StyledIdenticonContainer, { ref: ref });
}
