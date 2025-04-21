import ReactGA from "react-ga4";

// Your Google Analytics measurement ID
// Replace this with your actual GA4 measurement ID
const MEASUREMENT_ID = "G-MY4CQTHX85"; 

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined") {
    ReactGA.initialize(MEASUREMENT_ID);
  }
};

// Track page views
export const logPageView = () => {
  if (typeof window !== "undefined") {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    console.log(`Page view logged: ${window.location.pathname}`);
  }
};

// Track events
export const logEvent = (category, action, label = null, value = null) => {
  if (typeof window !== "undefined") {
    ReactGA.event({
      category,
      action,
      label,
      value
    });
    console.log(`Event logged: category=${category}, action=${action}, label=${label}, value=${value}`);
  }
};

// Track user exceptions/errors
export const logException = (description, fatal = false) => {
  if (typeof window !== "undefined") {
    ReactGA.exception({
      description,
      fatal
    });
    console.log(`Exception logged: ${description}`);
  }
};

// Track user timing
export const logTiming = (category, variable, value, label = null) => {
  if (typeof window !== "undefined") {
    ReactGA.timing({
      category,
      variable, 
      value,
      label
    });
    console.log(`Timing logged: category=${category}, variable=${variable}, value=${value}ms`);
  }
};

// Set user properties
export const setUserProperties = (properties) => {
  if (typeof window !== "undefined") {
    ReactGA.set(properties);
    console.log(`User properties set: ${JSON.stringify(properties)}`);
  }
};

export default {
  initGA,
  logPageView,
  logEvent,
  logException,
  logTiming,
  setUserProperties
}; 