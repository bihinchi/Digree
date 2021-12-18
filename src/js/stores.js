import { writable } from 'svelte/store';

export const network = writable(1);
export const currentPub = writable({});
export const history = writable([]);
export const leaderboard = writable({ scores: [], allScores: [], counts: []});


class Web3 {
    constructor () {
        this.connected = false;
    }
}

export const web3 = new Web3();