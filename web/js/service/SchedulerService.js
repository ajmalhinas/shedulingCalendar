
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (SchedulerService == null) var SchedulerService = {};
var isLocal = true;
if(isLocal)
    SchedulerService._path = 'http://localhost:8080/qLabV2/dwr';
else
    SchedulerService._path = 'http://mie.zapto.org:8080/qLabV2/dwr';



SchedulerService.getDate = function(p0, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getDate', p0, callback);
}
SchedulerService.getServices = function(p0, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getServices', p0, callback);
}
SchedulerService.getAllFacilitators = function(callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getAllFacilitators', callback);
}
SchedulerService.getAllSpecialities = function(callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getAllSpecialities', callback);
}
SchedulerService.updatePaypalResponse = function(p0, p1, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'updatePaypalResponse', p0, p1, callback);
}
SchedulerService.createSsn = function(p0, p1, p2, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'createSsn', p0, p1, p2, callback);
}
SchedulerService.lockApmt1 = function(p0, p1, p2, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'lockApmt1', p0, p1, p2, callback);
}
SchedulerService.lockApmt2 = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'lockApmt2', p0, p1, p2, p3, p4, callback);
}
SchedulerService.confirmApmt = function(p0, p1, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'confirmApmt', p0, p1, callback);
}
SchedulerService.updateApmt = function(p0, p1, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'updateApmt', p0, p1, callback);
}
SchedulerService.updateApmt2 = function(p0, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'updateApmt2', p0, callback);
}
SchedulerService.cancelApmt = function(p0, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'cancelApmt', p0, callback);
}
SchedulerService.updateSsn = function(p0, p1, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'updateSsn', p0, p1, callback);
}
SchedulerService.cancelSsn = function(p0, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'cancelSsn', p0, callback);
}
SchedulerService.getSsnList = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getSsnList', p0, p1, p2, p3, callback);
}
SchedulerService.getApmtList = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getApmtList', p0, p1, p2, p3, callback);
}
SchedulerService.getAllFacilities = function(callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getAllFacilities', callback);
}
SchedulerService.getAllLocalities = function(callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getAllLocalities', callback);
}
SchedulerService.getAllSsns = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'getAllSsns', p0, p1, p2, p3, callback);
}
SchedulerService.addAppointer = function(p0, callback) {
  dwr.engine._execute(SchedulerService._path, 'SchedulerService', 'addAppointer', p0, callback);
}