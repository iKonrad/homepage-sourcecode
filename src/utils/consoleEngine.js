
import Commands from './commands.json';

if (typeof window !== 'undefined') {
  window['openGithub'] = () => {
    const win = window.open('https://github.com/iKonrad', '_blank');
    win.focus();
  }

  window['openSource'] = () => {
    const win = window.open('https://github.com/iKonrad/homepage-sourcecode', '_blank');
    win.focus();
  }

  window['openLinkedin'] = () => {
    const win = window.open('https://linkedin.com/in/konrad-jarosiński-2194b1a4/', '_blank');
    win.focus();
  }
}


const runFunction = name => {
  const fn = window[name];
  if (typeof fn === "function") fn();
}

export default cmd => {
  // First, let's split the commands by space to get access to sub-commands
  const commands = cmd.split(' ');

  // Iterate through commands and check if there's a corresponding command
  let filtered = Commands;
  let level = 0;

  /* Go through all the top-level commands and find either a response object or children.
   If children is found, overwrite the filtered variable and repeat the search */
  do {
    filtered = filtered.filter(tempCommand => tempCommand.cmd === commands[level]);
    filtered = filtered.length ? filtered[0] : undefined;

    if (filtered) {
      // Check if the command has any children
      if (filtered.children !== undefined) {
        /*
          Okay, so there are some child commands in here.
          Now, let's check if the command has any more items left and if it does,
          we can scan through children as well
         */
        if ((level + 1) < commands.length) {
          filtered = filtered.children;
        } else {
          return filtered.response;
        }

      } else {
        // If the command is found and it's the last command item, return it
        if (filtered.cmd !== undefined && (level + 1) >= commands.length) {
          // Check if there's any function associated with it and run it.
          if (filtered.fn !== undefined) {
            runFunction(filtered.fn);
          }
          return filtered.response;
        } else {
          return getError(cmd);
        }
      }
      level ++;
    }
  } while (filtered)


  return getError(cmd);
}

const getError = (cmd) => {
  return {
    type: 'error',
    text: [`Command not found. Type 'help' to get available commands`],
  }
}