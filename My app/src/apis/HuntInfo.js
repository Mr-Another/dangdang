
import {AJAXURL2} from "../commons/HuntUrl"

export default {
  gethuntInfo(cb){

    /**
     * 获取列表页数据
     */
    fetch(AJAXURL2).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
