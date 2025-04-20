import { portjay_backend } from "../../src/declarations/portjay_backend";

async function updateVisitorCount() {
  try {
    const count = await portjay_backend.recordVisit();
    document.getElementById("visitor-count").textContent = `Visitor Count: ${count}`;
  } catch (err) {
    console.error("Failed to record visit:", err);
    document.getElementById("visitor-count").textContent = "Visitor Count: N/A";
  }
}

window.addEventListener("load", updateVisitorCount);
