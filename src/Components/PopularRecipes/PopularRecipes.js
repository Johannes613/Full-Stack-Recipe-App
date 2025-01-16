import { useContext } from 'react';
import './PopularRecipes.css';
import { popularAssets } from './popular-assets';
import { GlobalContext } from '../GlobalContext';
import { LuClock4 } from "react-icons/lu";

const PopularRecipes = () => {
        const {searchValue,setSearchValue,handleSubmit} = useContext(GlobalContext)
    
    return (  
        <div className="pop-recipe">
            <div className="pop-head">
                <div className="rel">
                <div className="head-left">
                    <h2>Most Popular</h2>
                    <h1>Recipes</h1>
                    <p></p>
                </div>

                </div>
                
                <button className="see-all">See All</button>
            </div>
            <div className='pop-cont'>
                {
                    popularAssets.map((recipe)=>{
                        return(
                            <div className='each-pop' key={recipe.id}>
                                <div className='img-cont'>
                                <img src={recipe.img_src} alt="" />
                                </div>
                                <div className="headers">
                                    <p>{recipe.header1}</p>
                                    <p>{recipe.header2}</p>
                                </div>
                                <h2>{recipe.title}</h2>
                                <p>{recipe.description}</p>
                                <p className='time'><LuClock4 />{recipe.time}</p>
                            </div>
                        )
                    })

                }

            </div>



            
        </div>
    );
}
 
export default PopularRecipes;