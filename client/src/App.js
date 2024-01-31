import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer} from './components/footer';
import {RecipeDetail} from './pages/RecipeDetail';
import { Auth } from './pages/auth';
import { CreateRecipe } from './pages/create-recipe';
import { SavedRecipes } from './pages/saved-recipes';





function App() {
  return (
        <Router>
          <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/recipes/:recipeId" component={RecipeDetail} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          </Routes>
        <Footer/>
        </Router>
  
  )
}
export default App;






// import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import { Home } from './pages/home'
// import { Auth } from './pages/auth';
// import { CreateRecipe } from './pages/create-recipe';
// import { SavedRecipes } from './pages/saved-recipes';
// import{ Navbar } from './components/navbar';
// import { Header } from './components/header.jsx';



// function App() {
//   return (
    
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Header title={<p>Share, Discover, and Savor Culinary Creations with a World of Food Enthusiasts.</p>} type="home"/>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/create-recipe" element={<CreateRecipe />} />
//         <Route path="/saved-recipes" element={<SavedRecipes />} />
//         </Routes>
//       </Router>      
//     </div>
    
//   );
// }

// export default App;
