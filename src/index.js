import React from "react"; 
import ReactDOM from "react-dom/client" 
import "./index.css";
 
function App() { 
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );  
} 

function Header() {
    return <h1 style={{ color: "black", fontSize: "48px" , textTransform:"uppercase" }}>Shannon's Pizza Co.</h1>
}


function Pizza({name, ingredients, price, image}) {
    return (
        <div className="pizza">
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <p>{ingredients}</p>
            <p>${price}</p>
        </div>
        
    );
}


const pizzaData = [
    {
        name:"Focaccia" ,
        ingredients:"Bread with italian olive oil and rosemary" ,
        price:"6" ,
        image:"pizzas/focaccia.jpg"
    },
    {
        name:"Pizza Margherita" ,
        ingredients:"Tomato and mozzarella cheese" ,
        price:"10" ,
        image:"pizzas/margherita.jpg"
    },
    {
        name:"Pizza Spinach" ,
        ingredients:"Tomato, mozzarella cheese,spinach and ricotta onion" ,
        price:"12" ,
        image:"pizzas/spinaci.jpg"
    },
    {
        name:"Pizza Funghi" ,
        ingredients:"Tomato, mozzarella cheese, mushrooms, and onion" ,
        price:"12" ,
        image:"pizzas/funghi.jpg"
    },
    {
        name:"Pizza Salamino" ,
        ingredients:"Tomato, mozzarella cheese and pepperoni" ,
        price:"15" ,
        image:"pizzas/salamino.jpg"
    },
    {
        name:"Pizza Prosciutto" ,
        ingredients:"Tomato, mozzarella cheese, ham, aragula and burrata cheese" ,
        price:"18" ,
        image:"pizzas/prosciutto.jpg"
    },
]

const clickAlert = () => {
    alert("Order Submitted!");
  };


function Footer() {
    const currentTime = new Date().getHours();
    const isOpen = currentTime >= 10 && currentTime < 22;


  return (
    <div>
      {isOpen && <h1></h1>}
      
      <footer>
        {isOpen ? (
        <div className="footer-content">
            <h1>We're currently open</h1>
            <button onClick={clickAlert} className="btn">Order</button>
        </div>
        ) : (
          <h1>Sorry, we're closed</h1>
        )}
      </footer>
    </div>
  );
};


function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p className="tagline ">Authentic Italian Cuisine, all from our stone oven</p>
            <div className="pizzas">
                {pizzaData.map((pizza, index) => (
                    <Pizza key={index} 
                    name={pizza.name} 
                    ingredients={pizza.ingredients} 
                    price={pizza.price} 
                    image={pizza.image}/>
                ))}
            </div>
        </div>
    );
}




 
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<App/>);