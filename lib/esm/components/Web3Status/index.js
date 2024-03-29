import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContractKit, WalletTypes } from '@celo-tools/use-contractkit';
import * as Sentry from '@sentry/react';
import { darken, lighten } from 'polished';
import { useEffect, useMemo } from 'react';
import { Activity } from 'react-feather';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { isAddress } from 'web3-utils';
import { NETWORK_CHAIN_NAME } from '../../connectors';
import useAccountSummary from '../../hooks/useAccountSummary';
import { useWalletModalToggle } from '../../state/application/hooks';
import { isTransactionRecent, useAllTransactions } from '../../state/transactions/hooks';
import { shortenAddress } from '../../utils';
import { ButtonSecondary } from '../Button';
import Identicon from '../Identicon';
import Loader from '../Loader';
import { RowBetween } from '../Row';
import WalletModal from '../WalletModal';
const Web3StatusGeneric = styled(ButtonSecondary) `
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }
`;
const Web3StatusError = styled(Web3StatusGeneric) `
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  :hover,
  :focus {
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
`;
const Web3StatusConnect = styled(Web3StatusGeneric) `
  background-color: ${({ theme }) => theme.primary4};
  border: none;
  color: ${({ theme }) => theme.primaryText1};
  font-weight: 500;

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
    color: ${({ theme }) => theme.primaryText1};
  }

  ${({ faded }) => faded &&
    css `
      background-color: ${({ theme }) => theme.primary5};
      border: 1px solid ${({ theme }) => theme.primary5};
      color: ${({ theme }) => theme.primaryText1};

      :hover,
      :focus {
        border: 1px solid ${({ theme }) => darken(0.05, theme.primary4)};
        color: ${({ theme }) => darken(0.05, theme.primaryText1)};
      }
    `}
`;
const Web3StatusConnected = styled(Web3StatusGeneric) `
  background-color: ${({ pending, theme }) => (pending ? theme.primary1 : theme.bg2)};
  border: 1px solid ${({ pending, theme }) => (pending ? theme.primary1 : theme.bg3)};
  color: ${({ pending, theme }) => (pending ? theme.white : theme.text1)};
  font-weight: 500;
  :hover,
  :focus {
    background-color: ${({ pending, theme }) => (pending ? darken(0.05, theme.primary1) : lighten(0.05, theme.bg2))};

    :focus {
      border: 1px solid ${({ pending, theme }) => (pending ? darken(0.1, theme.primary1) : darken(0.1, theme.bg3))};
    }
  }
`;
const Text = styled.p `
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 500;
`;
const NetworkIcon = styled(Activity) `
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;
// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a, b) {
    return b.addedTime - a.addedTime;
}
const StatusIcon = () => {
    const { walletType } = useContractKit();
    if (walletType === WalletTypes.MetaMask ||
        walletType === WalletTypes.CeloExtensionWallet ||
        walletType === WalletTypes.Injected) {
        return _jsx(Identicon, {});
    }
    return null;
};
function Web3StatusInner() {
    const { t } = useTranslation();
    const { connect, address, account } = useContractKit();
    const { nom } = useAccountSummary(address);
    const error = null;
    const allTransactions = useAllTransactions();
    const sortedRecentTransactions = useMemo(() => {
        const txs = Object.values(allTransactions);
        return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
    }, [allTransactions]);
    const pending = sortedRecentTransactions.filter((tx) => !tx.receipt).map((tx) => tx.hash);
    const hasPendingTransactions = !!pending.length;
    const toggleWalletModal = useWalletModalToggle();
    let accountName;
    if (nom) {
        accountName = nom;
    }
    else if (account && !isAddress(account)) {
        // Phone numbers show up under `account`, so we need to check if it is an address
        accountName = account;
    }
    else if (address) {
        accountName = shortenAddress(address);
    }
    if (accountName) {
        return (_jsxs(Web3StatusConnected, Object.assign({ id: "web3-status-connected", onClick: toggleWalletModal, pending: hasPendingTransactions }, { children: [hasPendingTransactions ? (_jsxs(RowBetween, { children: [_jsxs(Text, { children: [pending === null || pending === void 0 ? void 0 : pending.length, " ", t('pending')] }), ' ', _jsx(Loader, { stroke: "white" })] })) : (_jsx(_Fragment, { children: _jsx(Text, { children: accountName }) })), !hasPendingTransactions && _jsx(StatusIcon, {})] })));
    }
    else if (error) {
        return (_jsxs(Web3StatusError, Object.assign({ onClick: () => connect().catch(console.warn) }, { children: [_jsx(NetworkIcon, {}), _jsx(Text, { children: error === 'unsupported' ? 'Wrong Network' : 'Error' })] })));
    }
    else {
        return (_jsx(Web3StatusConnect, Object.assign({ id: "connect-wallet", onClick: () => connect().catch(console.warn), faded: !address }, { children: _jsx(Text, { children: t('ConnectToAWallet') }) })));
    }
}
export default function Web3Status() {
    var _a;
    const { address: account, walletType } = useContractKit();
    const allTransactions = useAllTransactions();
    const sortedRecentTransactions = useMemo(() => {
        const txs = Object.values(allTransactions);
        return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
    }, [allTransactions]);
    const pending = sortedRecentTransactions.filter((tx) => !tx.receipt).map((tx) => tx.hash);
    const confirmed = sortedRecentTransactions.filter((tx) => tx.receipt).map((tx) => tx.hash);
    const { summary, nom } = useAccountSummary(account !== null && account !== void 0 ? account : undefined);
    useEffect(() => {
        Sentry.setUser({ id: account !== null && account !== void 0 ? account : undefined });
        Sentry.setTag('connector', walletType);
        Sentry.setTag('network', NETWORK_CHAIN_NAME);
    }, [walletType, account]);
    return (_jsxs(_Fragment, { children: [_jsx(Web3StatusInner, {}), _jsx(WalletModal, { ENSName: (_a = nom !== null && nom !== void 0 ? nom : summary === null || summary === void 0 ? void 0 : summary.name) !== null && _a !== void 0 ? _a : undefined, pendingTransactions: pending, confirmedTransactions: confirmed })] }));
}
