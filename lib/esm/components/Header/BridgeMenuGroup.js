import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { ApplicationModal } from '../../state/application/actions';
import { useModalOpen, useToggleModal } from '../../state/application/hooks';
import { ExternalLink } from '../../theme';
import { StyledNavMenu } from './NavMenu';
const StyledMenu = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MenuFlyout = styled.span `
  min-width: 8.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  z-index: 100;
`;
const MenuItem = styled(ExternalLink) `
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`;
export default function BridgeMenuGroup() {
    const node = useRef();
    const open = useModalOpen(ApplicationModal.BRIDGE);
    const toggle = useToggleModal(ApplicationModal.BRIDGE);
    useOnClickOutside(node, open ? toggle : undefined);
    return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    _jsxs(StyledMenu, Object.assign({ ref: node }, { children: [_jsx(StyledNavMenu, Object.assign({ onClick: toggle }, { children: "Bridge" })), open && (_jsxs(MenuFlyout, { children: [_jsx(MenuItem, Object.assign({ id: "link", href: "https://allbridge.io/" }, { children: "Allbridge" })), _jsx(MenuItem, Object.assign({ id: "link", href: "https://app.multichain.org/#/router" }, { children: "Multichain" })), _jsx(MenuItem, Object.assign({ id: "link", href: "https://optics.app/" }, { children: "Optics" })), _jsx(MenuItem, Object.assign({ id: "link", href: "https://bridge.orbitchain.io/" }, { children: "Orbit" }))] }))] })));
}
