import {AJAXURL4} from "../commons/FindUrl"

export default{
  getFindInfo(cb){
    /**
     * 获取首页信息
     */
    fetch(AJAXURL4).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })

  }
}
