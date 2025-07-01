import React from "react";
import { Button } from "../components/Button";

const DesignSystemContainer = () => {
  return (
    <main className="mycontainer mt-30 flex flex-col gap-10">
      <Button>Tombol Primary</Button>

      <Button variant="secondary">Tombol Secondary</Button>

      <Button variant="outline">Tombol Outline</Button>
    </main>
  );
};

export default DesignSystemContainer;
