import React from "react";
import { sampledata } from "../utils/Data";
import HoCCardComponent, { WithHeader } from "./HoCCardComponent";

function HoCComponent() {
  const EnhancingCard = WithHeader(HoCCardComponent);

  const data = sampledata;
  return (
    <div className="d-flex flex-wrap p-4 gap-5">
      {data?.map((item, index) => {
        return (
          <>
            {index % 2 !== 0 ? (
              <HoCCardComponent
                title={item.title}
                description={item.description}
                navigation={`/details/${item.id}`}
              />
            ) : (
              <EnhancingCard
                title={item.title}
                description={item.description}
                navigation={`/details/${item.id}`}
              />
            )}
          </>
        );
      })}
    </div>
  );
}

export default HoCComponent;
