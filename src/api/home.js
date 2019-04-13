import axios from 'axios';
import baseUrl from './base';

export default {
  requesthomebanner () {
    console.log('bannerdata')
    // axios.get(baseUrl + '/banner')
    //   .then(data => {
    //     console.log(data)
    //   })
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/banner')
      .then(data => {
        resolve(data.data)
      })
    })
  },
  requsethomedata () {
    console.log('homedata')
    // axios.get(baseUrl + '/douban')
    //   .then(data => {
    //     console.log(data)
    //   })
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/douban')
      .then(data => {
        resolve(data.data)
      })
    })
  }
}