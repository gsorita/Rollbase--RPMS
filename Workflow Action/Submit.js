/*
BS_ids = rbv_api.getRelatedIds("R59341084", {!id});
var total=0.0; 
rbv_api.print(BS_ids[0]);
for (x=1;x<=BS_ids.length;x++){
  query  = "SELECT id FROM billing_sheet1 WHERE R59341084 = '59892458'";// + BS_ids[x-1
  var arr = rbv_api.selectQuery(query, 1000);
  //total += parseInt(arr[0][0]);
rbv_api.printArr(arr);
}

*/
var count = #CALC_COUNT.R59341084( 1 | true )
if ({!total_hours} < 40.0) return false;
else if (count>=1){
  var billing_count_other = #CALC_COUNT.R59341084( 1 | status =  '^new');
  var relatedIds = rbv_api.getRelatedIds("R59341084", {!id});
  for (x=0;x<relatedIds.length;x++)
  {
    rbv_api.setFieldValue("timesheet3", {!id}, "status", "^for");
  }
  return true;
}
else return false;