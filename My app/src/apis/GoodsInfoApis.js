import {AJAXURL1} from "../commons/URLSchema"

export default{
    getIndexInfo(cb){
      /**
       * 获取首页信息
       */
      fetch(AJAXURL1).then(res=>{
        res.json().then(data=>{
          cb(data)
        })
      })

    }
}

