import axios from "axios";
export async function fetchPlans() {
    const response = await axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_ENDPOINT+"/api/plan"
      });
      return response && response.data || []
}