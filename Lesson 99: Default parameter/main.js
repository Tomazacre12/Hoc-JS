function logger(log, type = 'log'){
    console[type](log)
}
logger('error message','error')