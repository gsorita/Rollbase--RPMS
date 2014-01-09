var billing_count_other = #CALC_COUNT.R59341084( 1 | status =  '^new'); var rejectedBill = #CALC_COUNT.R59341084( 1 |  status = '^rej' )
var count = #CALC_COUNT.R59341084( 1 | true );
if ({!total_hours} < 40.0) return false;
else if (billing_count_other > 0) return true;
else return false;