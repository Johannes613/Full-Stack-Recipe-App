import { Children, createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [accState,setAccState] = useState('Sign-up')
  const [btn,setBtn] = useState('')


  useEffect(() => {
    localStorage.setItem("fav-list", JSON.stringify(favouritesList));
  }, [favouritesList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setLoading(true);
    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}&key=e7bcaaec-364b-4b22-a5e2-11b1a2c682ba`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setRecipeList(res.data.recipes);
        setLoading(false);
        // setSearchValue("");
      })
      .catch((error) => {
        console.log(error,'Error while fetching recipe');
      });
  };
  const fetchList = async()=>{
    if(localStorage.getItem('token')){
      try {
        const response = await fetch('https://recipe-backend-2-cnob.onrender.com/api/fav/list',{
          method:'POST',
          headers:{
            token:localStorage.getItem('token')
          }
        });
        const data = await response.json();
        setFavouritesList(data.favRecipes)
  
      } catch (error) {
        console.log(error,'While fetching list')      
      }
    }
    
  }

  useEffect(()=>{
    fetchList();
  },[])


  const findItem = async(itemId)=>{
    try {
      const response = await fetch('https://recipe-backend-2-cnob.onrender.com/api/fav/find',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            token:localStorage.getItem('token')
          },
        body:JSON.stringify({"itemId":itemId})
      })
      if(!response.ok)
        throw new Error('Error occured while finding')
      const data = await response.json() 
      return data.message;
      
    } catch (error) {
      console.log(error)
      
    }

  }

  const accessBtn = async()=>  !localStorage.getItem('token')|| await findItem(recipeDetailsData.data.recipe.id) === "false"?setBtn("Save As Favourites"):setBtn("Remove From Favourites")

  
  const removeItem = async(itemId)=>{
    try {
      const response = await fetch('https://recipe-backend-2-cnob.onrender.com/api/fav/remove',{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            token:localStorage.getItem('token')
          },
        body:JSON.stringify({"itemId":itemId})
      })
      if(!response.ok)
        throw new Error('Error occured while removing')
      const data = await response.json() 
      accessBtn()
      
    } catch (error) {
      console.log(error)
      
    }

  }



  const handleFavourites = async(currentItem)=>{
    try {
        const response = await fetch('https://recipe-backend-2-cnob.onrender.com/api/fav/add',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                token:localStorage.getItem('token')
              },
            body:JSON.stringify({"image_url":currentItem.image_url,"itemId":currentItem.id,"title":currentItem.title,"publisher":currentItem.publisher})
          })

          if(!response.ok)
            throw new Error('Error occured')
          const data = await response.json() 
          accessBtn()
            

    } catch (error) {
      console.log(error,'while adding')
      
    }

  }
  useEffect(()=>{
    if(recipeDetailsData)
      accessBtn()
  })
  



  

  // const  = (currentItem) => {
  //   const cpList = [...favouritesList];
  //   const index = cpList.findIndex((item) => item.id === currentItem.id);
  //   if (index == -1) {
  //     cpList.push(currentItem);
  //   } else {
  //     cpList.splice(index, 1);
  //   }
  //   setFavouritesList(cpList);
  // };
  return (
    <div className="global-context">
      <GlobalContext.Provider
        value={{
          searchValue,
          setSearchValue,
          handleSubmit,
          recipeList,
          loading,
          count,
          recipeDetailsData,
          setRecipeDetailsData,
          favouritesList,
          setFavouritesList,
          handleFavourites,
          accState,
          setAccState, 
          token,
          setToken,
          fetchList,
          findItem,
          removeItem,
          btn,
          accessBtn
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalState;
