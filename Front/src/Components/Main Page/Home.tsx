import { Button } from "@nextui-org/react";
import Tortoise from "../../Assets/Tortoise.png";

function Home() {
  const startApp = () => {
    window.location.href = "/app";
  };

  return (
    <div className="h-screen px-32 py-28 flex">
      <div className="flex gap-40">
        <img src={Tortoise} alt="" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold">Tortoise</h1>
          <h3 className="text-3xl font-bold">Boost your productivity</h3>
          <div className="p-4">
            <Button color="primary" onClick={startApp}>
              Start Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
