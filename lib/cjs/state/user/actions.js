"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAprMode = exports.clearValoraAccount = exports.setValoraAccount = exports.toggleURLWarning = exports.removeSerializedPair = exports.addSerializedPair = exports.removeSerializedToken = exports.addSerializedToken = exports.updateUserDeadline = exports.updateUserSlippageTolerance = exports.updateUserDisableSmartRouting = exports.updateUserAllowMoolaWithdrawal = exports.updateUserMinApprove = exports.updateUserSingleHopOnly = exports.updateUserExpertMode = exports.updateUserDarkMode = exports.updateMatchesDarkMode = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.updateMatchesDarkMode = (0, toolkit_1.createAction)('user/updateMatchesDarkMode');
exports.updateUserDarkMode = (0, toolkit_1.createAction)('user/updateUserDarkMode');
exports.updateUserExpertMode = (0, toolkit_1.createAction)('user/updateUserExpertMode');
exports.updateUserSingleHopOnly = (0, toolkit_1.createAction)('user/updateUserSingleHopOnly');
exports.updateUserMinApprove = (0, toolkit_1.createAction)('user/updateUserMinApprove');
exports.updateUserAllowMoolaWithdrawal = (0, toolkit_1.createAction)('user/updateUserAllowMoolaWithdrawal');
exports.updateUserDisableSmartRouting = (0, toolkit_1.createAction)('user/updateUserDisableSmartRouting');
exports.updateUserSlippageTolerance = (0, toolkit_1.createAction)('user/updateUserSlippageTolerance');
exports.updateUserDeadline = (0, toolkit_1.createAction)('user/updateUserDeadline');
exports.addSerializedToken = (0, toolkit_1.createAction)('user/addSerializedToken');
exports.removeSerializedToken = (0, toolkit_1.createAction)('user/removeSerializedToken');
exports.addSerializedPair = (0, toolkit_1.createAction)('user/addSerializedPair');
exports.removeSerializedPair = (0, toolkit_1.createAction)('user/removeSerializedPair');
exports.toggleURLWarning = (0, toolkit_1.createAction)('app/toggleURLWarning');
exports.setValoraAccount = (0, toolkit_1.createAction)('user/setValoraAccount');
exports.clearValoraAccount = (0, toolkit_1.createAction)('user/clearValoraAccount');
exports.updateUserAprMode = (0, toolkit_1.createAction)('user/updateUserAprMode');