import { useEffect, useState } from "react";
import { EXAMPLES } from "./data";
import "./App.css";
import TabButton from "./components/TabButton";
import type { ExamplesRecord } from "./types";

type ExampleKeys = keyof ExamplesRecord;

function App() {
  const [selectedTopic, setselectedTopic] = useState<ExampleKeys | "">("");

  useEffect(() => {
    if (selectedTopic) {
      console.log("The updated selected topic is:", selectedTopic);
    }
  }, [selectedTopic]);

  function handleSelect(selectedButton: ExampleKeys) {
    setselectedTopic(selectedButton);
  }

  let tabContent = <p>لطفا یک برند رو انتخاب بکنید</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <p>{EXAMPLES[selectedTopic].description}</p>
      </div>
    );
  }

  const carBrands = Object.keys(EXAMPLES);

  return (
    <main>
      <h1> React Tabs </h1>
      <section id="tabs-container">
        <section id="brand-names">
          {carBrands.map((brand) => (
            <TabButton
              key={brand}
              isSelected={selectedTopic === brand}
              onSelect={() => handleSelect(brand)}
            >
              {EXAMPLES[brand].title}
            </TabButton>
          ))}
        </section>
        {tabContent}
      </section>
    </main>
  );
}

export default App;
