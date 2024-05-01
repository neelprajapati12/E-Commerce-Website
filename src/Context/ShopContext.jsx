import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_products";

export const ShopContext=createContext(null);

const getdefaultcart=()=>{
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [cartitems,setcartitems]=useState(getdefaultcart());

    const addtocart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartitems);
    }

    const removefromcart=(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const gettotalcatamount=()=>{
        let totalamaount=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo=all_products.find((product)=>product.id===Number(item));
                const price =parseFloat(iteminfo.new_price.replace(/[^\d.]/g, ''))
                totalamaount+=price * cartitems[item];
            }
        }
        return totalamaount;
    }

    const gettotalitems=()=>{
        let totalitem=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                totalitem+= cartitems[item];
            }
            return totalitem;
        }
    }

    const contextvalue={all_products,cartitems,addtocart,removefromcart,gettotalcatamount,gettotalitems};
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;