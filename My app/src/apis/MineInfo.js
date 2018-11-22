
import {AJAXURL5} from "../commons/MineUrl"

export default {
  getMineInfo(cb){

    /**
     * 获取列表页数据
     */
    fetch(AJAXURL5).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
