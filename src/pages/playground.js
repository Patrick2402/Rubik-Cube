const Playground = () => {

let moveturn = ["R","U","L","D","B","F","D'","U'","L'","R'","F'","B'","U2","D2","B2","F2","R2","L2"];
const chooseturn = () =>{
    let array = [];
    for (let x = 0; array.length < 21; x++) {
        if(array.length === 0){
            console.log("IS EMPTY");
            array.push(moveturn[Math.floor(Math.random()*moveturn.length)]); 
        }else{
            const y = moveturn[Math.floor(Math.random()*moveturn.length)];
            const z = y.split("'");
            const a = y.split("2");
            console.log(a);
            if(array[array.length-1].includes(z[0])) continue;
            if(array[array.length-1].includes(a[0])) continue;
            else  array.push(y);
        }
    };
    return  array;
};


    return ( 
        <div>
            <p>Your turn: {chooseturn()}</p>
        </div>
     );
}
 
export default Playground;