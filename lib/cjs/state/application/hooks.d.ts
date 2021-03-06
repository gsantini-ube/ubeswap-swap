import { AppState } from '../index';
import { ApplicationModal, PopupContent } from './actions';
export declare function useBlockNumber(): number | undefined;
export declare function useModalOpen(modal: ApplicationModal): boolean;
export declare function useToggleModal(modal: ApplicationModal): () => void;
export declare function useOpenModal(modal: ApplicationModal): () => void;
export declare function useCloseModals(): () => void;
export declare function useWalletModalToggle(): () => void;
export declare function useToggleSettingsMenu(): () => void;
export declare function useShowClaimPopup(): boolean;
export declare function useToggleShowClaimPopup(): () => void;
export declare function useToggleSelfClaimModal(): () => void;
export declare function useToggleDelegateModal(): () => void;
export declare function useToggleVoteModal(): () => void;
export declare function useAddPopup(): (content: PopupContent, key?: string) => void;
export declare function useRemovePopup(): (key: string) => void;
export declare function useActivePopups(): AppState['application']['popupList'];
