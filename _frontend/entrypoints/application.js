import { defineElements } from "@runno/runtime";

defineElements();

window.process = window.process || {
    platform: null,
    browser: true,
    env: {
      NODE_DEBUG: false,
    }
  };
