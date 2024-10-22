import './App.css';

function App() {
  return (
    <div className="App">
      <body>
    <div class="container">
        <h1>Rich Cuisine</h1>
        <div class="navbar">
            <ul>
                <input type="text" placeholder="Search" size="30%"/>
                <button>SEARCH</button>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">TEAM</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a class="reservation" href="#">RESERVATION</a></li>
            </ul>
        </div>
    </div>

      
    <div class="recipes">
        <h1>Featured Recipes</h1>
        <div class="recipes-section">
            <div class="recipe-card">
                <img src="project/src/image/dish-1.jpg" alt=""/>
                <h2>Custerd</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="#">View Recipe</a>
            </div>
        </div>
        <div class="recipes-section">
            <div class="recipe-card">
                <img src="image/dish-2.jpg" alt=""/>
                <h2>Butter Chicken</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="#">View Recipe</a>
            </div>
        </div>
        <div class="recipes-section">
            <div class="recipe-card">
                <img src="image/dish-3.jpg"  alt=""/>
                <h2>Chicken Griled</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="#">View Recipe</a>
            </div>
        </div>
        <div class="recipes-section">
            <div class="recipe-card">
                <img src="image/dish-4.jpg" alt=""/>
                <h2>Sallet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="#">View Recipe</a>
            </div>
        </div>

    </div>
</body>
      </div>
  );
}

export default App;
