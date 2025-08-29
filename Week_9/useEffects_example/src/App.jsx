
//& more clean code then above

import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("above interval") 
        const interval = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        background: "red",
                        borderRadius: 20,
                        width: 20,
                        height: 25,
                        paddingLeft: 10,
                        paddingTop: 5,
                    }}
                >
                    {count}
                </div>
            </div>
            <img
                style={{ cursor: "pointer" }}
                src="https://imgs.search.brave.com/i_aoA-Sx06FjT1Ns6cRyKw_84Z8FaYZnhpcB2dxSrQ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9m/cmVlLW5vdGlmaWNh/dGlvbnMtYmVsbC1v/dXRsaW5lLWljb24t/cG5nLTcwMTc1MTY5/NDk3NDM4MWg3d2Js/azZmcHgucG5n"
                width={40}
            />
        </div>
    );
}

export default App;



     //^ TRY WITHOUT USE EFFECRS AND SAW WHAT HAPPENS
//     useEffect(() => {
//       console.log("above interval") 
//       setInterval(increaseCount, 1000);
//     }, []);

//     return (
//         <div>
//             <div style={{ display: "flex" }}>
//                 <div style={{ background: "red", borderRadius: 20, width: 20, height: 25, paddingLeft: 10, paddingTop: 5 }}>
//                     {count}
//                 </div>
//             </div>
//             <img style={{ cursor: "pointer" }} src={"https://imgs.search.brave.com/i_aoA-Sx06FjT1Ns6cRyKw_84Z8FaYZnhpcB2dxSrQ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9m/cmVlLW5vdGlmaWNh/dGlvbnMtYmVsbC1v/dXRsaW5lLWljb24t/cG5nLTcwMTc1MTY5/NDk3NDM4MWg3d2Js/azZmcHgucG5n"} width={40} />
//         </div>
//     );
// }

// export default App;