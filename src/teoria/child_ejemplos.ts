// Child process
import { exec, execFile, fork, spawn, execFileSync, execSync, spawnSync } from 'child_process';

// Asynchronous process creation
// Spawning .bat and .cmd files on Windows
// child_process.exec(command[, options][, callback])
export function ChilldProcessExec(command: string): void {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

// child_process.execFile(file[, args][, options][, callback])
export function ChilldProcessExecFile(file: string, args: string[]): void {
    execFile(file, args, (error, stdout, stderr) => {
        if (error) {
            console.error(`execFile error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    }
    );
}
// child_process.fork(modulePath[, args][, options])
export function ChilldProcessFork(modulePath: string, args: string[]): void {
    const child = fork(modulePath, args);
    child.on('error', (error) => {
        console.error(`Fork error: ${error}`);
    });
    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
    child.on('message', (message) => {
        console.log(`Message from child process: ${message}`);
    });
    child.send('Hello from parent process');
}

// Example of child_process.spawn
export function spawnExample(command: string, args: string[] = []) {
    const child = spawn(command, args, { detached: true, stdio: 'inherit' });

    child.on('error', (err) => {
        console.error('Error al ejecutar el comando:', err);
    });

    child.on('close', (code) => {
        console.log(`Proceso hijo finalizado con código: ${code}`);
    });
}

// Example of child_process.execFileSync
export function execFileSyncExample(file: string, args: string[] = []) {
    try {
        const output = execFileSync(file, args, { stdio: 'inherit' });
        console.log('Salida del comando:', output.toString());
    } catch (err) {
        console.error('Error al ejecutar el archivo:', err);
    }
}

// Example of child_process.execSync
export function execSyncExample(command: string) {
    try {
        const output = execSync(command, { stdio: 'inherit' });
        console.log('Salida del comando:', output.toString());
    } catch (err) {
        console.error('Error al ejecutar el comando:', err);
    }
}

// Example of child_process.spawnSync
export function spawnSyncExample(command: string, args: string[] = []) {
    try {
        const result = spawnSync(command, args, { stdio: 'inherit' });
        if (result.error) {
            console.error('Error al ejecutar el comando:', result.error);
        } else {
            console.log('Proceso hijo finalizado con código:', result.status);
        }
    } catch (err) {
        console.error('Error al ejecutar el comando:', err);
    }
}
