"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOrderData = void 0;
const Order = [
    { name: 'salt', type: 'uint256' },
    { name: 'makerAsset', type: 'address' },
    { name: 'takerAsset', type: 'address' },
    { name: 'maker', type: 'address' },
    { name: 'receiver', type: 'address' },
    { name: 'allowedSender', type: 'address' },
    { name: 'makingAmount', type: 'uint256' },
    { name: 'takingAmount', type: 'uint256' },
    { name: 'makerAssetData', type: 'bytes' },
    { name: 'takerAssetData', type: 'bytes' },
    { name: 'getMakerAmount', type: 'bytes' },
    { name: 'getTakerAmount', type: 'bytes' },
    { name: 'predicate', type: 'bytes' },
    { name: 'permit', type: 'bytes' },
    { name: 'interaction', type: 'bytes' },
];
const name = 'Limit Order Protocol';
const version = '2';
function buildOrderData(chainId, verifyingContract, order) {
    return {
        primaryType: 'Order',
        types: { Order },
        domain: { name, version, chainId, verifyingContract },
        message: order,
    };
}
exports.buildOrderData = buildOrderData;
