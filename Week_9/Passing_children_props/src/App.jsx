import 'react';
import './styles.css'; // Import the CSS file

const NavBar = () => {
  return <div className="navbar">My Real-World App</div>;
};

const Footer = () => {
  return <div className="footer">© 2025 My App, Inc. All rights reserved.</div>;
};

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      
      <div className="cards-container">
        <Card>
          <h2>Welcome to the App</h2>
          <p>This is a sample card displaying content.</p>
        </Card>
        <Card>
          <h2>Features</h2>
          <p>Explore the amazing features of this app!</p>
        </Card>
        <Card>
          <h2>Contact Us</h2>
          <p>Reach out to us for any queries or support.</p>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;



// //eslint-disable react/no-children-prop 
// import 'react';

// // eslint-disable-next-line react/prop-types
// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//           NAV bar
//             {children}
//           footer
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div style={{display:"flex"}} >
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

// export default App;


// ^ Above code  without arrow function

// function Card({children}){
//       return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// }

// function App(){
//   return (
//   <div style={{display:"flex"}}>    
//     <Card children={
//         <div style={{color:"black"}} >
//             <h2>Card Title</h2>
//             <p>This is some content inside the card.</p>
//         </div>}>
//     </Card>

//     <Card children={
//         <div style={{color:"black"}} >
//             <h2>2 card</h2>
//             <p>This is some content inside the 2 card.</p>
//         </div>}>
//     </Card>
//   </div>
//   )
// }

// export default App;