import {AJAXURL7} from "../commons/ShopUrl"

export default{
  getShopInfo(cb){
    /**
     * 获取首页信息
     */
    fetch(AJAXURL7).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })

  }
}
