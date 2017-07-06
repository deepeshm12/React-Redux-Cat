import React from 'react';
import axios from 'axios';

const CatApi = () => { 

  const catsGet = ()  => {
    axios.get(`..api/data/cat.json`).then(res => {
      return   res.json();
        
      });
  }
}

export default CatApi;