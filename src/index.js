import React from "react"; 
import ReactDOM from "react-dom/client" 
import "./index.css";

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



const clickAlert = () => {
    alert("Order Submitted!");
  };


function Footer() {
    const currentTime = new Date().getHours();
    const isOpen = currentTime >= 10 && currentTime < 22;


  return (
      
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
  );
};





function Menu() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const filteredPizzas = pizzaData.filter((pizzaData) =>  pizzaData.name.toLowerCase().includes(searchTerm));
    const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase());


    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <input
              type="text"
              placeholder="Search pizzas..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <div className="pizzas">
                {filteredPizzas.map((pizza, index) => (
                    <Pizza 
                    key={index} 
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