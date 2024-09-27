import axios from "axios";
// `${process.env.API_URL}/api/routes`
/**
 * @param {param} param
 * @param {headers} headers
 * @param {function} setLoading 
 * @param {function} setData 
 * @param {string} route
 */
const DefaultHeaders = {
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json'
}

export async function getData(route, setData, setLoading, params = {}, headers = DefaultHeaders){
  setLoading(true);
  try {
    const response = await axios.get(
      route,
      { 
        params,
        headers
      }
    )
    setData(response.data.data);
  } catch (error) {
    console.error(error);
  } finally {
      setLoading(false);
    }
};
