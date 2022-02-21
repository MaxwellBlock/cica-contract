// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hello {

    event SetCounter(address indexed account, uint256 counter);

    uint256 public counter;

    function setCounter() external {
        counter += 1;
        emit SetCounter(msg.sender, counter);
    }

    function getCounter() external view returns (uint256) {
        return counter;
    }
} 