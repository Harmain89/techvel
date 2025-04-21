# Google Analytics Implementation Guide

This document explains how Google Analytics 4 (GA4) is implemented in the Techvel website to track visitor behavior and site performance.

## Setup Instructions

1. **Get Your Google Analytics Measurement ID**

   - Sign in to your [Google Analytics account](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Navigate to Admin → Data Streams → Web
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Update the Tracking Code**

   Replace the placeholder `G-XXXXXXXXXX` with your actual Measurement ID in these two files:

   - `src/utils/analytics.js` - Line 5
   - `index.html` - Lines 30 and 34

## What's Being Tracked

The current implementation tracks:

1. **Pageviews**: Automatically tracks whenever a user navigates to a different page
2. **Contact Form Interactions**:
   - Form submission attempts
   - Validation errors
   - Successful submissions
   - Server errors
   - API errors

## Extending Analytics

### Track Additional Events

To track custom events from any component:

```jsx
import { logEvent } from "@/utils/analytics";

// Usage inside component
logEvent(
  "Category",  // e.g., "Button", "Form", "Navigation"
  "Action",    // e.g., "Click", "Submit", "View"
  "Label",     // Optional: Additional info
  "Value"      // Optional: Numeric value
);
```

### Track User Timing

To measure performance:

```jsx
import { logTiming } from "@/utils/analytics";

// Usage
logTiming(
  "Category",  // e.g., "Load Time", "API Response"
  "Variable",  // What's being measured
  timeInMs,    // Time in milliseconds
  "Label"      // Optional: Additional info
);
```

### Track Exceptions

To track errors:

```jsx
import { logException } from "@/utils/analytics";

try {
  // Your code
} catch (error) {
  logException(error.message, false); // Second param: is fatal?
}
```

## Viewing Analytics Data

1. Sign in to your [Google Analytics account](https://analytics.google.com/)
2. Select your property
3. Navigate to Reports to view collected data
4. For event-specific data, go to Reports → Engagement → Events

## Privacy Considerations

- Ensure your Privacy Policy mentions Google Analytics usage
- Consider adding a cookie consent banner for GDPR compliance
- No personally identifiable information (PII) should be sent to Google Analytics 