import {AJAXURL3} from "../commons/CartsUrl"

export default{
  getCartsInfo(cb){
    /**
     * 获取首页信息
     */
    fetch(AJAXURL3).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })

  }
}
