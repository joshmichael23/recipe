import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:max-w-[740px] lg:p-[42px] lg:my-32 bg-white rounded-xl'>
     <div>
        <img className="lg:rounded-xl" src="/images/image-omelette.jpeg" alt="" />
     </div>
     <div className='p-8 lg:p-0 lg:pt-12 grid gap-y-8'>
       <h1 className='font-youngserif text-4xl font-bold text-cldarkCharcoal'>Simple Omellete Recipe</h1>
       <p className='text-md font-outfit text-clwengeBrown'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
         to perfection, optionally filled with your choice of cheese, vegetables, or meats.
       </p>
        <section className='p-8 bg-clroseWhite flex flex-col gap-y-4 font-outfit rounded-xl'>
          <h1 className='text-xl font-bold text-clDarkRaspberry'>Preparation time</h1>
          <ul className='list-disc list-outside ml-6 flex flex-col gap-y-2 text-base text-clwengeBrown'>
            <li><span className="font-bold text-clwengeBrown">Total</span>: Approximately 10 minutes</li>
            <li><span className="font-bold text-clwengeBrown">Preparation</span>: 5 minutes</li>
            <li><span className="font-bold text-clwengeBrown">Cooking</span>: 5 minutes</li>
          </ul>
        </section>
        <section className='grid gap-4'>
          <h2 className='text-3xl font-youngserif text-clNutmeg'>Ingredients</h2>
          <ul className='flex flex-col gap-2 font-outfit list-disc list-outside ml-6 text-clwengeBrown'>
            <li >2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </section>
        <section className='grid gap-4 pb-8 border-b border-gray-200'> 
          <h2 className='text-3xl font-youngserif text-clNutmeg'>Instructions</h2>
          <ol className='list-decimal list-outside ml-4 flex flex-col gap-y-2 font-outfit text-clwengeBrown font-bold' >
              <li>
                <p className='font-normal'>
                  <span className="font-bold">Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                    You can add a tablespoon of water or milk for a fluffier texture.
                </p>
              </li>
              <li>
                <p className="font-normal"><span className="font-bold">Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</p></li>
              <li>
                <p className="font-normal">
                  <span className="font-bold">Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                  the eggs evenly coat the surface.
                </p>
              </li>
              <li>
                <p className="font-normal">
                  <span className="font-bold">Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the
                  middle, sprinkle your chosen fillings over one half of the omelette.
                </p>
              </li>
              <li>
                <p className="font-normal">
                  <span className="font-bold">Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the
                  fillings. Let it cook for another minute, then slide it onto a plate.
                </p>
              </li>
              <li><p className="font-normal"><span className="font-bold">Enjoy</span>: Serve hot, with additional salt and pepper if needed.</p></li>
          </ol>
        </section>
        <section className='grid gap-4'>
          <h2 className='text-3xl font-youngserif text-clNutmeg'>Nutrition</h2>
          <p className='font-outfit text-clwengeBrown'>
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <table className='font-outfit text-clwengeBrown'>
            <tr className='border-b border-gray-200 text-center'>
              <td className='p-2'>Calories</td>
              <td  className='p-2'><span className="font-bold text-clNutmeg">277kcal</span></td>
            </tr>
            <tr className='border-b border-gray-200 text-center'>
              <td className='p-2'>Carbs</td>
              <td className='p-2'><span className="font-bold text-clNutmeg">0g</span></td>
            </tr>
            <tr className='border-b border-gray-200 text-center '>
              <td className='p-2'>Protein</td>
              <td className='p-2'><span className="font-bold text-clNutmeg">20g</span></td>
            </tr>
            <tr className='border-b border-gray-200 text-center'>
              <td className='p-2'>Fat</td>
              <td className='p-2'><span className="font-bold text-clNutmeg">22g</span></td>
            </tr>
          </table>
        </section>
     </div>
    </div>
  )
}

export default App
