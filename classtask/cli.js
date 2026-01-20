// Task 1: File Manager CLI Tool
// Scenario
// You are working as a backend intern. Your manager asks you to build a command-line File Manager that can perform basic file operations.
// Tasks
// Create a Node.js program that supports the following commands:
// Read a file
// Write content to a file
// Append logs to a file
// Copy a file
// Delete a file
// List files inside a directory
//  Constraints
// Use asynchronous fs methods
// Handle errors properly (ENOENT, EACCES)
// Use process.argv for input

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const command = args[0];
const filePath = args[1];
const content = args.slice(2).join(" ");
const destPath = args[2];

if (!command || !filePath) {
    console.error("Usage: node app.js <command> <path> [content/destination]");
    process.exit(1);
}

const resolvedPath = path.resolve(filePath);

function handleError(err) {
    if (err.code === "ENOENT") {
        console.error("File or directory not found");
    } else if (err.code === "EACCES") {
        console.error("Permission denied");
    } else {
        console.error(err.message);
    }
}

switch (command) {
    case "read":
        fs.readFile(resolvedPath, "utf-8", (err, data) => {
            if (err) return handleError(err);
            console.log(data);
        });
        break;

    case "write":
        fs.writeFile(resolvedPath, content, (err) => {
            if (err) return handleError(err);
            console.log("File written successfully");
        });
        break;

    case "append":
        fs.appendFile(resolvedPath, content, (err) => {
            if (err) return handleError(err);
            console.log("Content appended successfully");
        });
        break;

    case "copy":
        if (!destPath) {
            console.error("Destination path missing");
            break;
        }
        fs.copyFile(resolvedPath, path.resolve(destPath), (err) => {
            if (err) return handleError(err);
            console.log("File copied successfully");
        });
        break;

    case "delete":
        fs.unlink(resolvedPath, (err) => {
            if (err) return handleError(err);
            console.log("File deleted successfully");
        });
        break;

    case "list":
        fs.readdir(resolvedPath, (err, files) => {
            if (err) return handleError(err);
            files.forEach(file => console.log(file));
        });
        break;

    default:
        console.log("Invalid command. Use read, write, append, copy, delete, or list.");
}

// This code implements a simple CLI File Manager that can read, write, append, copy, delete files, and list directory contents using asynchronous fs methods and proper error handling.

//w/o switch case

// const fs = require("fs");
// const path = require("path");

// const args = process.argv.slice(2);
// const command = args[0];
// const filePath = args[1];
// const content = args.slice(2).join(" ");
// const destPath = args[2];

// if (!command || !filePath) {
//     console.error("Usage: node app.js <command> <path> [content/destination]");
//     process.exit(1);
// }

// const resolvedPath = path.resolve(filePath);

// function handleError(err) {
//     if (err.code === "ENOENT") {
//         console.error("File or directory not found");
//     } else if (err.code === "EACCES") {
//         console.error("Permission denied");
//     } else {
//         console.error(err.message);
//     }
// }

// /* ---------- Command Handlers ---------- */

// const commands = {

//     read: () => {
//         fs.readFile(resolvedPath, "utf-8", (err, data) => {
//             if (err) return handleError(err);
//             console.log(data);
//         });
//     },

//     write: () => {
//         fs.writeFile(resolvedPath, content, (err) => {
//             if (err) return handleError(err);
//             console.log("File written successfully");
//         });
//     },

//     append: () => {
//         fs.appendFile(resolvedPath, content, (err) => {
//             if (err) return handleError(err);
//             console.log("Content appended successfully");
//         });
//     },

//     copy: () => {
//         if (!destPath) {
//             console.error("Destination path missing");
//             return;
//         }
//         fs.copyFile(resolvedPath, path.resolve(destPath), (err) => {
//             if (err) return handleError(err);
//             console.log("File copied successfully");
//         });
//     },

//     delete: () => {
//         fs.unlink(resolvedPath, (err) => {
//             if (err) return handleError(err);
//             console.log("File deleted successfully");
//         });
//     },

//     list: () => {
//         fs.readdir(resolvedPath, (err, files) => {
//             if (err) return handleError(err);
//             files.forEach(file => console.log(file));
//         });
//     }
// };

// /* ---------- Execute Command ---------- */

// if (!commands[command]) {
//     console.error("Invalid command. Use read, write, append, copy, delete, or list.");
//     process.exit(1);
// }

// commands[command]();
