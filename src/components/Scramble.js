import { useEffect, useState } from "react";
const moveturn = ["R","U","L","D","B","F","D'","U'","L'","R'","F'","B'","U2","D2","B2","F2","R2","L2"];


const Scramble = (a) => {
    const moves = [];
    const chooseturn = () =>{
        for (let x = 0; moves.length < 21; x++) {
            if(moves.length === 0){
                moves.push(moveturn[Math.floor(Math.random()*moveturn.length)]); 
            }else{
                const y = moveturn[Math.floor(Math.random()*moveturn.length)];
                const z = y.split("'");
                const a = y.split("2");
                if(moves[moves.length-1].includes(z[0])) continue;
                if(moves[moves.length-1].includes(a[0])) continue;
                else  moves.push(y);
            }
        };
        return moves;
    };

const [arr,setArr] = useState();

    useEffect(() => {
       setArr(chooseturn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     
        return (
            <div id="t">
            {arr}
            </div>

    );
    }
 
export default Scramble;