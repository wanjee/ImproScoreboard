import { defineStore } from 'pinia';

type State = {
    // Everything related to team A
    teamA: Team,
    // Everything related to team B
    teamB: Team,
    // One of the available display types
    display: "black" | "title" | "score",
    // In minutes
    periodDuration: number,
}

type Team = {
    score : number,
    partialFaults : number,
    totalFaults : number,
    color : string,
}

export const useScoreBoardStore = defineStore('scoreBoard', {
    state: (): State => {
        return {
            teamA: {
                score: 0,
                partialFaults: 0,
                totalFaults: 0,
                color: '#d2232a',
            },
            teamB: {
                score: 0,
                partialFaults: 0,
                totalFaults: 0,
                color: '#d2232a',
            },
            display: 'title',
            periodDuration: 45,
        }
    },
});
