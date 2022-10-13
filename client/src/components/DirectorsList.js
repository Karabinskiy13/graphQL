import React from "react";
import { useQuery } from "@apollo/client";

import { ALL_DIRECTORS } from "./queries";
import Director from "./Director";

const DirectorList = () => {
  const { loading, error, data } = useQuery(ALL_DIRECTORS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return data.directors.map((director) => (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Director key={director.id} director={director} />
    </div>
  ));
};

export default DirectorList;
