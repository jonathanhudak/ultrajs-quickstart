import React from "react";
import { SWRConfig } from "swr";
import { Link, Route, Switch } from "wouter";
import { Helmet } from "react-helmet";
import ultraCache from "ultra/cache";
import { Cache } from "https://deno.land/x/ultra@v0.7.6/src/types.ts";

const options = (cache: Cache) => ({
  provider: () => ultraCache(cache),
  // suspense: true,
});

const Ultra = ({ cache }: { cache: Cache }) => {
  return (
    <SWRConfig value={options(cache)}>
      <Helmet>
        <title>Hello Ultra</title>
      </Helmet>
      <main>
        <Switch>
          <Route path="/">
            <h1>Homepage</h1>
          </Route>
          <Route path="/boom">
            <h1>Boom! 💥</h1>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </main>
    </SWRConfig>
  );
};

export default Ultra;
