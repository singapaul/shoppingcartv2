export const fetchData = async () => {
  try {
    console.log('we made it to the try block');
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    console.log(data + '  is the data back from teh PAI');
    return data;
  } catch (e) {
    console.log('MISSION FAILURE');
    console.log(e);
  }
};
