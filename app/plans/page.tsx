import Plans from "@ui/plans";
import Template from "@ui/template";
import {fetchPlans} from "@lib/data"
export default async function Home() {
  const plans = await fetchPlans();
  return (
    <Template>
      <Plans data={plans} />
    </Template>
  );
}
