import { useEffect, useState } from "react";

const Scramble = (a) => {
    const [scramble, setscramble] = useState(null); // scramble 
    const moves = ['U', 'U2', 'U\'', 'D', 'D2', 'D\'', 'L', 'L2', 'L\'', 'R', 'R2', 'R\'', 'F', 'F2', 'F\'', 'B', 'B2', 'B\''];
    const axes = ['U', 'D', 'L', 'R', 'F', 'B'];


    function generateScramble() {
        const scrambleLength = 20; // the basic length of scramble
        let scramble = ''; //empty string for scramble 
        let lastAxis = null; // last axis is null bc there is no move no -1

        for (let i = 0; i < scrambleLength; i++) {
            let move; // for each iteration is generated new var called move
            do {
                move = moves[Math.floor(Math.random() * moves.length)]; // first iteration, just generation random move 
            } while (axes.indexOf(move[0]) === axes.indexOf(lastAxis));  // 
            scramble += move + ' ' // adding move to our scramble 
            lastAxis = move[0] // setting last axis
        }
        setscramble(scramble) // setting scramble to my var Hook
    }


    useEffect(() => {
        generateScramble()
    }, [])

    return (
        <div id="t">
            {scramble}
        </div>

    );
}

export default Scramble;