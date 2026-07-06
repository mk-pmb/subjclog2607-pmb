'use strict';

const EX = function makeLogger(topic) {
  const cons = console;
  const tag = topic + ':';
  const log = cons.log.bind(cons, tag);
  log.dbg = cons.debug.bind(cons, tag);
  log.err = cons.error.bind(cons, tag);
  log.warn = cons.warn.bind(cons, tag);
  return log;
};

module.exports = EX;
