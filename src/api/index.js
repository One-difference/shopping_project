import requests from "./request";
import mockrequest from './mockajax'

export const reqCategory =()=>{
   return requests({url:'/api/product/getBaseCategoryList',method:'get'});

}
export const reqgetbanner =()=>{
    return mockrequest({url:'/mock/banner',method:'get'});
}

export const reqgetfloor =()=>{
    return mockrequest({url:'/mock/floor',method:'get'});
}

export const reqgetsearch =(params)=>{
    return requests({url:`/api/list`,method:'post',data:params});
}
//
export const reqgoodsinfo =(skuId)=>{
    return requests({url:`/api/item/${ skuId }`,method:'get'});
}
//加入购物车成功信息
export const reqshopinfo =(skuId,skuNum)=>{
    return requests({url:`/api/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'});
}
//购物车信息
export const reqcartList =()=>{
    return requests({url:'/api/cart/cartList',method:'get'});
}
//删除商品
export const delshop =(skuId)=>{
    return requests({url:`/api/cart/deleteCart/${skuId}`,method:'delete'});
}
//切换商品选中状态
export const changeshop =(skuID,isChecked)=>{
    return requests({url:`/api/cart/checkCart/${skuID}/${isChecked}`,method:'get'});
}

export const getcode =(phone)=>{
    return requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'});
}

export const usersgo =(data)=>{
    return requests({url:`/api/user/passport/register`,method:'post',data});
}

export const userslogin =(data)=>{
    return requests({url:`/api/user/passport/login`,method:'post',data});
}

export const finishlogin =()=>{
    return requests({url:'/api/user/passport/auth/getUserInfo',method:'get'});
}

export const logout =()=>{
    return requests({url:'/api/user/passport/logout',method:'get'});
}

export const trade =()=>{
    return requests({url:'/api/order/auth/trade',method:'get'});
}

export const trade2 =()=>{
    return requests({url:'/api/user/userAddress/auth/findUserAddressList',method:'get'});
}

export const pay =(tradeNo,data)=>{
    return requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data});
}

export const createNative =(orderId)=>{
    return requests({url:`/api/payment/weixin/createNative/${orderId}`,method:'get'});
}

export const listinfo =(page,limit)=>{
    return requests({url:`/api/order/auth/${page}/${limit}`,method:'get'});
}
