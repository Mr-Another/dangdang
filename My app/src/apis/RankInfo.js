import {AJAXURL6} from "../commons/RankUrl"

export default{
  getRankInfo(cb){
    /**
     * 获取首页信息
     */
    fetch(AJAXURL6).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })

  }
}
