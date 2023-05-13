// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');


// fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json').then(
//   async (response) => {
//     console.log(`Received response: ${response.status}`);
//     console.log(`Received Type: ${response.type}`);
//     console.log(await response.json());
//   }
// );
// console.log("Started request…");

const testPromise = new Promise((resolve, reject) =>  {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2023) {
      let successfulResponse = {
        success: true,
        data: 'This year is greater than 2023',
        message: 'Fetching data successfully'
      }
      resolve(successfulResponse);
    } else {
      reject('This year is greater than 2023')
    } 
  });
  
  
  const testGetPromiseValue = async () => {
    try {
      const value = await testPromise;
      console.log('Able to fetch the response');
      console.log(value);
    } catch (err) {
      console.log('Errrrr !');
      console.log(err);
    }
  }
  
  testGetPromiseValue();