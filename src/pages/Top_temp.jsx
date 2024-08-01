// src/App.js
import React from "react";
import DiscoveryV2 from "ibm-watson/discovery/v2";
import { IamAuthenticator, NoAuthAuthenticator } from "ibm-watson/auth";
import {
  DiscoverySearch,
  SearchInput,
  SearchResults,
  SearchFacets,
  ResultsPagination,
  DocumentPreview,
} from "@ibm-watson/discovery-react-components";
import "@ibm-watson/discovery-styles/scss/index.scss";

// replace these variables:
const version = "2020-08-30"; // YYYY-MM-DD date format
const projectId = "7d6ed7df-d862-45d1-81ca-3a35be59e8c4"; // retrieved from Discovery Tooling UI, ex.

// authentication must be handled on the server
// @see https://github.com/watson-developer-cloud/node-sdk#client-side-usage
const authenticator = NoAuthAuthenticator();
// tell SDK to send requests to our server's `/api` endpoint, where auth header is added
const serviceUrl =
  "https://api.us-south.discovery.watson.cloud.ibm.com/instances/1292a7f8-ae12-4a52-b0b8-d25526201179/api";

const Top = () => {
  let searchClient, success;
  try {
    searchClient = new DiscoveryV2({ serviceUrl, version, authenticator });
    success = true;
  } catch (err) {
    console.error(err);
  }
  return success ? (
    <DiscoverySearch searchClient={searchClient} projectId={projectId}>
      <SearchInput />
      <SearchResults />
      <SearchFacets />
      <ResultsPagination />
      <DocumentPreview />
    </DiscoverySearch>
  ) : (
    setupMessage()
  );
};

function setupMessage() {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20%",
        fontSize: "1.5rem",
      }}
    >
      Please replace the constants in App.js along with setting up your
      credentials file in order to see the Discovery sample application.
      <br />
      <br />
      Check the console log for more information if you have replaced these
      constants and are still seeing this message.
    </div>
  );
}

export default Top;
