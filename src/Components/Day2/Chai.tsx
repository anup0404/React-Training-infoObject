
type RecipeProps={
    drinkers:number
}

const Recipe=(props:RecipeProps)=>{
    return(
        <>
        <ol>    
      <li>Boil {props.drinkers} cups of water.</li>
      <li>Add {props.drinkers} spoons of tea and {0.5 * props.drinkers} spoons of spice.</li>
      <li>Add {0.5 * props.drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
        </>
    )
}

const Chai = () => {
  return (
    <section>
    <h1>Spiced Chai Recipe</h1>
    <h2>For two</h2>
    <Recipe drinkers={2} />
    <h2>For a gathering</h2>
    <Recipe drinkers={4} />
  </section>
  )
}

export default Chai