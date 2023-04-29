import { EditorState } from "@codemirror/state"
import { keymap } from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
import { python } from "@codemirror/lang-python"
import { basicSetup, EditorView } from "codemirror"

let startState = EditorState.create({
  doc: document.getElementById("static-py").innerHTML,
  extensions: [keymap.of(defaultKeymap), basicSetup, python()]
})

let editor = new EditorView({
  state: startState,
  parent: document.getElementById("editor")
})

const output = document.getElementById("console");
output.innerHTML = "Initializing...\n";

// add pyodide returned innerText to the output
function addToOutput(stdout) {
  output.innerHTML += ">>> " + "\n" + stdout + "\n";
}

// clean the output section
function clearHistory() {
  output.innerHTML = "";
}

// init pyodide and show sys.version when it's loaded successfully
async function main() {
  let pyodide = await loadPyodide();
  output.innerHTML = pyodide.runPython(`
      import sys
      import js
      sys.version
  `);
  output.innerHTML += "\n" + "Python Ready!" + "\n";
  return pyodide;
}


let pyodideReadyPromise = main();

// run the main function

// pass the editor innerHTML to the pyodide.runPython function and show the result in the output section
async function evaluatePython() {
  let pyodide = await pyodideReadyPromise;
  try {
    pyodide.runPython(`
      import io
      sys.stdout = io.StringIO()
      `);
    pyodide.runPython(editor.state.doc.toString());
    let stdout = pyodide.runPython("sys.stdout.getvalue()");
    addToOutput(stdout);
  } catch (err) {
    addToOutput(err);
  }
}



let runBtn = document.getElementById("execute")
runBtn.addEventListener("click", () => {
  evaluatePython()
})

let resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", () => {
  clearHistory()
})

document.getElementById("live").classList.remove("hidden")