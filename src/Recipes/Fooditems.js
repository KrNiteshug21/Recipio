const Fooditems = ({ dish }) => {
  return (
    <div className="recipeCards">
      <h3>{dish.recipeName}</h3>
      <img src={dish.recipeImg} alt={dish.recipeName}></img>
      <p>{dish.recipeDesc}</p>
      <h3>{dish.read}</h3>
    </div>
  );
};

export default Fooditems;
