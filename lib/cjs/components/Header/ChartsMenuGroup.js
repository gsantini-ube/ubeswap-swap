"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const useOnClickOutside_1 = require("../../hooks/useOnClickOutside");
const actions_1 = require("../../state/application/actions");
const hooks_1 = require("../../state/application/hooks");
const theme_1 = require("../../theme");
const NavMenu_1 = require("./NavMenu");
const StyledMenu = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MenuFlyout = styled_components_1.default.span `
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
const MenuItem = (0, styled_components_1.default)(theme_1.ExternalLink) `
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
function ChartsMenuGroup() {
    const node = (0, react_1.useRef)();
    const open = (0, hooks_1.useModalOpen)(actions_1.ApplicationModal.CHARTS);
    const toggle = (0, hooks_1.useToggleModal)(actions_1.ApplicationModal.CHARTS);
    (0, useOnClickOutside_1.useOnClickOutside)(node, open ? toggle : undefined);
    return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    (0, jsx_runtime_1.jsxs)(StyledMenu, Object.assign({ ref: node }, { children: [(0, jsx_runtime_1.jsx)(NavMenu_1.StyledNavMenu, Object.assign({ onClick: toggle }, { children: "Charts" })), open && ((0, jsx_runtime_1.jsxs)(MenuFlyout, { children: [(0, jsx_runtime_1.jsx)(MenuItem, Object.assign({ id: "link", href: "https://info.ubeswap.org/" }, { children: "Analytics" })), (0, jsx_runtime_1.jsx)(MenuItem, Object.assign({ id: "link", href: "https://celotracker.com" }, { children: "Celo Tracker" }))] }))] })));
}
exports.default = ChartsMenuGroup;
