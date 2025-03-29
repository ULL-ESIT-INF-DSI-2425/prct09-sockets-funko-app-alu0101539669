import {
  fsAccess,
  fsAppendFile,
  fsChmod,
  fsClose,
  fsCopyFile,
  fsCp,
  fsFstat,
  fsFsync,
  fsFtruncate,
  fsFutimes,
  fsLink,
  fsLstat,
  fsMkdir,
  fsStat,
  fsOpen,
  fsOpendir,
  fsRead,
  fsReaddir,
  fsReadFile,
  fsRealpath,
  fsRename,
  fsRmdir,
  fsRm,
  fsWatchFile,
  fsWrite,
  fsWriteFile,
  fsAccessSync,
  fsAppendFileSync,
  fsCloseSync,
  fsCopyFileSync,
  fsCpSync,
  fsFstatSync,
  fsFsyncSync,
  fsFtruncateSync,
  fsFutimesSync,
  fsMkdirSync,
  fsOpenSync,
  fsOpendirSync,
  fsReadSync,
  fsReaddirSync,
  fsReadFileSync,
  fsRealpathSync,
  fsRenameSync,
  fsRmdirSync,
  fsRmSync,
  fsStatSync,
  fsWriteSync,
  fsWriteFileSync,
} from './fs_ejemplos.js';

import {
  ChilldProcessExec,
  ChilldProcessExecFile,
  ChilldProcessFork,
  spawnExample,
  execFileSyncExample,
  execSyncExample,
  spawnSyncExample,
} from './child_ejemplos.js';

// Test asynchronous methods
fsAccess('./test.txt');
fsAppendFile('./test.txt', 'Hello, World!');
fsChmod('./test.txt', '755');
fsCopyFile('./test.txt', './test_copy.txt');
fsMkdir('./test_dir');
fsStat('./test.txt');
fsRename('./test.txt', './renamed_test.txt');
fsRm('./test_copy.txt');

// Test synchronous methods
fsAccessSync('./renamed_test.txt');
fsAppendFileSync('./renamed_test.txt', ' Synchronous append.');
fsCopyFileSync('./renamed_test.txt', './sync_copy.txt');
fsMkdirSync('./sync_dir');
fsStatSync('./renamed_test.txt');
fsRenameSync('./sync_copy.txt', './renamed_sync_copy.txt');
fsRmSync('./renamed_sync_copy.txt');

// Test child process examples
ChilldProcessExec('ls');
ChilldProcessExecFile('node', ['-v']);
ChilldProcessFork('./child_script.js', []);
spawnExample('echo', ['Hello from spawn']);
execFileSyncExample('node', ['-v']);
execSyncExample('ls');
spawnSyncExample('echo', ['Hello from spawnSync']);

// Add more tests as needed for other functions
console.log('Tests completed.');
console.log('Child process tests completed.');


