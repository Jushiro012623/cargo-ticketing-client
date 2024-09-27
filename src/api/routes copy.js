import axios from "axios";
// `${process.env.API_URL}/api/routes`
/**
 * @param {string} type
 * @param {function} setLoading 
 * @param {function} setData 
 * @param {string} route
 */
export async function vesselData(route, setData, setLoading, param){
    try {
      await axios
        .get(
          route,
          { params: { param } },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        )
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    return setData
};
