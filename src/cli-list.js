

import program from 'commander';
import timespan from 'timespan';
import cliff from 'cliff';
import 'colors';

import { log, title } from './util';
import * as forever from './forever';

program
  .parse(process.argv);

run(program.args).catch(err => log(err.stack));

// runs the command
async function run() {
  let procs = await forever.list();

  if(!procs) {
    title('No running processes');
    return;
  }

  title('Listing cluster...');

  let rows = [ [ 'uid', 'uptime' ] ];
  for(let proc of procs) {
    rows.push([ proc.uid.grey, uptime(proc) ]);
  }

  log(cliff.stringifyRows(rows));
}


function uptime(proc) {
  return proc.running ? timespan.fromDates(new Date(proc.ctime), new Date()).toString().yellow : 'STOPPED'.red;
}