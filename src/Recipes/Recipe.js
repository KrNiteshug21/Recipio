import data from "./data.json";
import Fooditems from "./Fooditems";

const Recipe = () => {
  return (
    <main className="recipeContainer">
      <div className="recipeContent setWidth">
        <div className="recipeHeading">
          <h1>PASTA</h1>
        </div>
        <div>
          <hr className="hrLine"></hr>
        </div>
        <div className="filterPara">
          <p>Filter articles</p>
          <p>{data.length} items</p>
        </div>
        <div className="filter">
          <select className="dropdown" name="popularity" id="popularity">
            <option value="popular">Popular</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <select className="dropdown" name="dish" id="dish">
            <option value="italian">Italian</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="recipeCardContainer">
          {data.map((dish) => (
            <Fooditems dish={dish} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Recipe;
