function request(url, body) {
    return new Promise(async (resolve, reject) => {
      try {
        
        
        const raw = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });
        const data = await raw.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  export default request;
  