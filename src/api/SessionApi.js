import axios from 'axios';

class SessionApi {
  static login(credentials11) {

    // const request = new Request(`http://10.102.98.164:3001/auth/getAuth `, {
    //  method: 'POST',
    //  headers: { 'Content-Type': 'application/json'},
    //   body: JSON.stringify({data: credentials11})
    // });
// var error ={ "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SCTAwhurhXSTwlhf_iZFYxeAUw7efnO_vdoTF4D0XVo"}
  // var datasend = JSON.stringify({data: credentials11});
    return  axios.post('http://10.102.98.164:3001/auth/getAuth',credentials11,{ headers: {
                'accept': 'application/json',
                'accept-language': 'en_US',
                'content-type': 'application/json'}},
                 )
    .then(response => {
      console.log(response.data);
      return response.data;
    }).catch(error => {
      console.log(error)
      return error;
    });
  } 
}

export default SessionApi;